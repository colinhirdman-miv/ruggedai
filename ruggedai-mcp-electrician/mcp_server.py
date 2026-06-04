from mcp.server.fastmcp import FastMCP
from mcp.server.fastmcp.prompts import base
from pydantic import Field
from datetime import datetime

mcp = FastMCP("ElectricianMCP", log_level="ERROR")

# Load documents from files
def load_doc(filename: str) -> str:
    with open(f"docs/{filename}", "r") as f:
        return f.read()

docs = {
    "after_hours_script.md": load_doc("after_hours_script.md"),
    "estimate_followup.md": load_doc("estimate_followup.md"),
    "review_request.md": load_doc("review_request.md"),
    "services.md": load_doc("services.md"),
    "pricing_guide.md": load_doc("pricing_guide.md"),
    "emergency_checklist.md": load_doc("emergency_checklist.md"),
}

# Call log (in-memory for demo)
call_log = []


# ─── TOOLS ───────────────────────────────────────────────────────────────────

@mcp.tool()
def read_doc(doc_id: str) -> str:
    """Read the contents of a document by its ID."""
    if doc_id not in docs:
        return f"Document '{doc_id}' not found. Available: {list(docs.keys())}"
    return docs[doc_id]

@mcp.tool()
def log_call(
    caller_name: str,
    phone_number: str,
    address: str,
    issue_description: str,
    urgency: str,
    is_commercial: bool = False
) -> str:
    """Log an after-hours call with caller details and issue."""
    entry = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "caller_name": caller_name,
        "phone_number": phone_number,
        "address": address,
        "issue": issue_description,
        "urgency": urgency,
        "commercial": is_commercial,
    }
    call_log.append(entry)
    return f"Call logged for {caller_name} at {address}. Urgency: {urgency}. Timestamp: {entry['timestamp']}"

@mcp.tool()
def get_call_log() -> list:
    """Return all logged after-hours calls."""
    if not call_log:
        return ["No calls logged yet."]
    return call_log


# ─── RESOURCES ───────────────────────────────────────────────────────────────

@mcp.resource("docs://documents", mime_type="application/json")
def list_docs() -> list[str]:
    return list(docs.keys())

@mcp.resource("docs://documents/{doc_id}", mime_type="text/plain")
def fetch_doc(doc_id: str) -> str:
    if doc_id not in docs:
        raise ValueError(f"Document '{doc_id}' not found.")
    return docs[doc_id]


# ─── PROMPTS ─────────────────────────────────────────────────────────────────

@mcp.prompt(
    name="handle_call",
    description="Handle an after-hours call using the call script. Qualifies the emergency and logs the call."
)
def handle_call(
    caller_info: str = Field(description="Brief description of caller and their issue, e.g. 'John at 123 Main St, no power to half the house'")
) -> list[base.Message]:
    prompt = f"""
You are handling an after-hours call for an electrical company.

Here is the initial information about the caller:
<caller_info>
{caller_info}
</caller_info>

Follow these steps:
1. Use the 'read_doc' tool to read 'after_hours_script.md' — this is your call script
2. Use the 'read_doc' tool to read 'services.md' to understand what the company handles
3. Use the 'read_doc' tool to read 'pricing_guide.md' to set expectations if asked about cost
4. Based on the script, determine the urgency level: TRUE EMERGENCY, URGENT, or CAN WAIT
5. Give the caller the appropriate safety instructions from 'emergency_checklist.md' if needed
6. Use the 'log_call' tool to log the call with all details gathered
7. End with a clear summary of what the caller should expect next

Be professional, calm, and direct. This caller may be stressed.
"""
    return [base.UserMessage(prompt)]


@mcp.prompt(
    name="followup",
    description="Generate an estimate follow-up message for a customer."
)
def followup(
    customer_name: str = Field(description="Customer's first name"),
    job_description: str = Field(description="Brief description of the job estimated, e.g. 'panel upgrade'"),
    days_since_estimate: str = Field(description="Number of days since estimate was sent, e.g. '3', '7', or '14'")
) -> list[base.Message]:
    prompt = f"""
You need to write an estimate follow-up message for a customer.

Customer name: {customer_name}
Job description: {job_description}
Days since estimate was sent: {days_since_estimate}

Use the 'read_doc' tool to read 'estimate_followup.md' — it contains templates for 3-day, 7-day, and 14-day follow-ups.

Select the appropriate template based on the days since the estimate, fill in the customer's details, and return the final message ready to send. Keep the tone warm but direct.
"""
    return [base.UserMessage(prompt)]


@mcp.prompt(
    name="request_review",
    description="Generate a review request message for a completed job."
)
def request_review(
    customer_name: str = Field(description="Customer's first name"),
    job_description: str = Field(description="Brief description of the job completed, e.g. 'panel upgrade'"),
    channel: str = Field(description="Delivery channel: 'text' or 'email'")
) -> list[base.Message]:
    prompt = f"""
You need to write a review request for a customer after a completed job.

Customer name: {customer_name}
Job completed: {job_description}
Channel: {channel}

Use the 'read_doc' tool to read 'review_request.md' — it contains templates for text and email.

Select the appropriate template, fill in the customer details and job description, and return the final message ready to send. Keep it short, genuine, and low-pressure.
"""
    return [base.UserMessage(prompt)]


if __name__ == "__main__":
    mcp.run(transport="stdio")
