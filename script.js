// Educational API Demo - NO REAL REQUESTS ARE SENT

// API Database (Structure only - endpoints for educational understanding)
const apiDatabase = [
    { name: "Amazon India - SMS OTP", type: "SMS", endpoint: "https://www.amazon.in/ap/signin", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: "phone=91XXXXXXXXXX&action=otp" },
    { name: "Flipkart - Voice Call", type: "CALL", endpoint: "https://www.flipkart.com/api/6/user/voice-otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "Paytm - SMS OTP", type: "SMS", endpoint: "https://accounts.paytm.com/signin/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "Google - Voice OTP", type: "CALL", endpoint: "https://accounts.google.com/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"+91XXXXXXXXXX"}' },
    { name: "Swiggy - SMS OTP", type: "SMS", endpoint: "https://www.swiggy.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "Zomato - Voice Call", type: "CALL", endpoint: "https://www.zomato.com/php/o2_api_handler.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: "phone=91XXXXXXXXXX&type=voice" },
    { name: "PhonePe - SMS OTP", type: "SMS", endpoint: "https://www.phonepe.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "WhatsApp - Voice Verify", type: "CALL", endpoint: "https://www.whatsapp.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "Instagram - SMS OTP", type: "SMS", endpoint: "https://www.instagram.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "Twitter/X - SMS OTP", type: "SMS", endpoint: "https://api.twitter.com/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "SBI YONO - Voice OTP", type: "CALL", endpoint: "https://yonosbi.sbi.co.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "HDFC Bank - SMS OTP", type: "SMS", endpoint: "https://netbanking.hdfcbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "ICICI iMobile - Call", type: "CALL", endpoint: "https://www.icicibank.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "MakeMyTrip - SMS OTP", type: "SMS", endpoint: "https://www.makemytrip.com/api/4/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "BookMyShow - Voice", type: "CALL", endpoint: "https://in.bookmyshow.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "Hotstar - SMS OTP", type: "SMS", endpoint: "https://www.hotstar.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "Netflix - Voice OTP", type: "CALL", endpoint: "https://www.netflix.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' },
    { name: "JioCinema - SMS OTP", type: "SMS", endpoint: "https://www.jiocinema.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"91XXXXXXXXXX"}' },
    { name: "Uber - Voice Call", type: "CALL", endpoint: "https://auth.uber.com/v2/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"phone":"+91XXXXXXXXXX"}' },
    { name: "Ola - SMS OTP", type: "SMS", endpoint: "https://api.olacabs.com/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, body: '{"mobile":"91XXXXXXXXXX"}' }
];

let requestCounter = 0;
let rateLimitRemaining = 10;

// Populate API selector
function populateApiSelector() {
    const select = document.getElementById('apiSelect');
    apiDatabase.forEach((api, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${api.name} (${api.type})`;
        select.appendChild(option);
    });
    document.getElementById('apiCount').textContent = apiDatabase.length;
}

// Show API structure when selected
function showApiStructure() {
    const select = document.getElementById('apiSelect');
    const index = select.value;
    
    if (index === "") {
        document.getElementById('requestStructure').textContent = 'Select an API to view structure';
        return;
    }
    
    const api = apiDatabase[parseInt(index)];
    const structure = {
        "API Name": api.name,
        "Type": api.type,
        "Method": api.method,
        "Endpoint": api.endpoint,
        "Headers": api.headers,
        "Request Body": api.body,
        "Note": "⚠️ This is a DEMO showing API structure. No real request is sent."
    };
    
    document.getElementById('requestStructure').textContent = JSON.stringify(structure, null, 2);
    addLog(`📖 Viewed structure for: ${api.name}`, 'info');
}

// Simulate request (NO REAL REQUEST SENT)
function simulateRequest() {
    const select = document.getElementById('apiSelect');
    const index = select.value;
    
    if (index === "") {
        addLog('❌ Please select an API first', 'error');
        return;
    }
    
    if (rateLimitRemaining <= 0) {
        addLog('⚠️ Daily demo limit reached! Come back tomorrow for more educational demos.', 'warning');
        return;
    }
    
    const api = apiDatabase[parseInt(index)];
    requestCounter++;
    rateLimitRemaining--;
    
    document.getElementById('requestCount').textContent = requestCounter;
    document.getElementById('rateLimit').textContent = rateLimitRemaining;
    
    // Simulated response
    const simulatedResponse = {
        "status": "SIMULATED - No real request sent",
        "api": api.name,
        "type": api.type,
        "would_send_to": "+91XXXXXXXXXX",
        "educational_note": "In a real scenario with valid API key, this would trigger an OTP",
        "legal_warning": "Using without permission is illegal under IT Act 2000",
        "timestamp": new Date().toISOString()
    };
    
    document.getElementById('responseStructure').textContent = JSON.stringify(simulatedResponse, null, 2);
    
    const typeEmoji = api.type === 'CALL' ? '📞' : '💬';
    addLog(`${typeEmoji} [SIMULATED] ${api.name} request would be sent (Demo #${requestCounter})`, 'success');
    
    // Show legal reminder
    if (requestCounter === 5) {
        addLog('⚠️ LEGAL REMINDER: This is for education only. Real usage requires API keys and permission!', 'warning');
    }
}

// Add log entry
function addLog(message, type = 'info') {
    const logDiv = document.getElementById('activityLog');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type === 'success' ? 'success' : (type === 'error' ? 'error' : (type === 'warning' ? 'warning' : ''))}`;
    const timestamp = new Date().toLocaleTimeString();
    entry.textContent = `[${timestamp}] ${message}`;
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
    
    // Keep only last 50 logs
    while (logDiv.children.length > 50) {
        logDiv.removeChild(logDiv.firstChild);
    }
}

// Consent handling
document.addEventListener('DOMContentLoaded', () => {
    populateApiSelector();
    
    const consentCheckbox = document.getElementById('consentCheckbox');
    const acceptBtn = document.getElementById('acceptBtn');
    const consentCard = document.getElementById('consentCard');
    const demoContent = document.getElementById('demoContent');
    
    consentCheckbox.addEventListener('change', (e) => {
        acceptBtn.disabled = !e.target.checked;
    });
    
    acceptBtn.addEventListener('click', () => {
        consentCard.style.display = 'none';
        demoContent.style.display = 'block';
        addLog('✅ Consent accepted. Starting educational demo session...', 'success');
        addLog('📚 Remember: This is a DEMO. No real SMS/Calls are being sent.', 'warning');
    });
    
    const apiSelect = document.getElementById('apiSelect');
    apiSelect.addEventListener('change', showApiStructure);
    
    const simulateBtn = document.getElementById('simulateBtn');
    simulateBtn.addEventListener('click', simulateRequest);
});