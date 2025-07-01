
export const PasswordGen = () => {
    return (
        <>
            <div className="container">
                <h2>Strong Password Generator</h2>
                <div className="input-group">
                    <label htmlFor="num">Password Lenght</label>
                    <input type="number" id="num" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="upper" />
                    <label htmlFor="upper">Include Uppercase</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="lower" />
                    <label htmlFor="lower">Include Lowercase</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="numbers" />
                    <label htmlFor="numbers">Include Number</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="symbols" />
                    <label htmlFor="symbols">Include Symbols</label>
                </div>
                <button className="btn">Generate Password</button>
                <div className="generatedPass">
                    <input type="text" readOnly/>
                    <button className="copyPass">Copy</button>
                </div>
            </div>

        </>
    )
}
