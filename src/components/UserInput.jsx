// import { useState } from 'react'

export default ({ userInput, onChange }) => {


    return <section id="user-input">
      <div className="input-group">
        <p>
            <label>Initial Investment</label>
            <input 
              type="number" required
              value={userInput.initialInvestment}
              onChange={(e) => onChange('initialInvestment', e.target.value)}
            />
        </p>
        <p>
            <label>Anual Investment</label>
            <input 
              type="number" required
              value={userInput.annualInvestment} 
              onChange={(e) => onChange('annualInvestment', e.target.value)}
            />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input 
            type="number" required 
            value={userInput.expectedReturn}
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" required 
            value={userInput.duration}
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
}