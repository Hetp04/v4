/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, EyeOff, Shield, ChevronDown, Globe, User, Lock } from 'lucide-react';
import newLogoUrl from '../newLogo.svg?url';
import clockUrl from '../clock.svg?url';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [domain, setDomain] = useState('');

  return (
    <div className="page">
      <div className="shell">
        
        {/* Left Panel - Gradient & Text */}
        <div className="leftPanel">
          {/* Custom Mesh Gradient */}
          <div className="meshBlob meshBlob1" />
          <div className="meshBlob meshBlob2" />
          <div className="meshBlob meshBlob3" />

          {/* Logo area */}
          <div className="brand">
            <img className="brandLogo" src={newLogoUrl} alt="New logo" />
          </div>

          <img className="leftClockArtwork" src={clockUrl} alt="" aria-hidden="true" />

          {/* Bottom Text */}
          <div className="leftBottom">
            <p className="leftKicker">From one dashboard</p>
            <h1 className="leftTitle">
              Track hardware and software lifecycle status and EOL timelines.
            </h1>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="rightPanel">
          <div className="formWrap">
            <h2 className="heading">Welcome back</h2>
            <p className="subheading">
              View lifecycle risk, EOL timelines, and action plans for your assets fast and centralized.
            </p>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              
              {/* Domain Field */}
              <div className="field">
                <label className="label">Select domain</label>
                <div className="selectWrap">
                  <Globe className="fieldIcon" aria-hidden="true" />
                  <select 
                    className={`control controlWithIcon controlSelect ${domain === '' ? 'controlPlaceholder' : 'controlValue'}`}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="" disabled hidden>Choose your domain</option>
                    <option value="domain1">Domain 1</option>
                    <option value="domain2">Domain 2</option>
                    <option value="domain3">Domain 3</option>
                  </select>
                  <ChevronDown className="selectChevron" />
                </div>
              </div>

              {/* Username Field */}
              <div className="field">
                <label className="label">Username</label>
                <div className="inputWrap">
                  <User className="fieldIcon" aria-hidden="true" />
                  <input 
                    type="text" 
                    placeholder="Enter your RBC LAN ID" 
                    className="control controlWithIcon"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="field">
                <label className="label">Password</label>
                <div className="passwordWrap">
                  <Lock className="fieldIcon" aria-hidden="true" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="control controlWithIcon"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="passwordToggle"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <div className="buttonRow">
                <button 
                  type="submit" 
                  className="primaryButton"
                >
                  Log in
                  <div className="arrow-wrapper" aria-hidden="true">
                    <div className="arrow" />
                  </div>
                </button>
              </div>
            </form>

            {/* OR Divider */}
            <div className="divider">
              <div className="dividerLine" />
              <span className="dividerText">or continue with</span>
              <div className="dividerLine" />
            </div>

            {/* SSO Button */}
            <div className="ssoRow">
              <button className="secondaryButton">
                <Shield size={18} className="secondaryIcon" />
                Sign in with SSO
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
