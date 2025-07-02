import { useState } from "react"

export const PasswordGen = () => {
    const [Len, setLen] = useState(8);

    const [IncludeUpper, setIncludeUpper] = useState(true);
    const [IncludeLower, setIncludeLower] = useState(true);
    const [IncludeNum, setIncludeNum] = useState(true);
    const [IncludeSymbol, setIncludeSymbol] = useState(true);

    const [Pwd, setPwd] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(Pwd);
        const alertDiv = document.createElement("div");
        alertDiv.textContent = "Password copied!";
        alertDiv.style.position = "fixed";
        alertDiv.style.top = "20px";
        alertDiv.style.background = "#4BB543";
        alertDiv.style.color = "#fff";
        alertDiv.style.padding = "16px 32px";
        alertDiv.style.borderRadius = "8px";
        alertDiv.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
        alertDiv.style.fontSize = "1.1rem";
        alertDiv.style.zIndex = "9999";
        document.body.appendChild(alertDiv);
        setTimeout(() => {
            alertDiv.style.transition = "opacity 0.5s";
            alertDiv.style.opacity = "0";
            setTimeout(() => document.body.removeChild(alertDiv), 500);
        }, 1200);
    };

    const genPswd = () => {
        let charset = '';

        if (IncludeUpper) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (IncludeLower) {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if (IncludeNum) {
            charset += "1234567890";
        }
        if (IncludeNum) {
            charset += "!@#$%^&*()_-+";
        }

        let generatedpws = "";

        for (let i = 0; i < Len; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedpws += charset[randomIndex]
        }
        setPwd(generatedpws)
    };

    const CalLen = (e) => {
        setLen(parseInt(e.target.value));
    };

    return (
        <>
            <div className="container">
                <h2>Strong Password Generator</h2>
                <div className="input-group">
                    <label htmlFor="num">Password Lenght</label>
                    <input type="number" id="num" value={Len} onChange={CalLen} />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="upper" checked={IncludeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />
                    <label htmlFor="upper">Include Uppercase</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="lower" checked={IncludeLower} onChange={(e) => setIncludeLower(e.target.checked)} />
                    <label htmlFor="lower">Include Lowercase</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="numbers" checked={IncludeNum} onChange={(e) => setIncludeNum(e.target.checked)} />
                    <label htmlFor="numbers">Include Number</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="symbols" checked={IncludeSymbol} onChange={(e) => setIncludeSymbol(e.target.checked)} />
                    <label htmlFor="symbols">Include Symbols</label>
                </div>
                <button className="btn" onClick={genPswd}>Generate Password</button>
                <div className="generatedPass">
                    <input type="text" readOnly value={Pwd} />
                    <button className="copyPass" onClick={copyToClipboard}>Copy</button>
                </div>
            </div>

        </>
    )
}
