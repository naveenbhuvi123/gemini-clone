import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context.jsx'

const Mane = () => {

    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    };
    return (
        <div className="main">
            <div className="nav">
                <p>Tech-GPT</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Can you write a poem about the color blue?")
                                }
                            >
                                <p>Can you write a poem about the color blue? </p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "What's the meaning of life?"
                                    )
                                }
                            >
                                <p>What's the meaning of life? </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Can you explain quantum physics in simple terms?")
                                }
                            >
                                <p>Can you explain quantum physics in simple terms?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "What's the meaning of the number 7?"
                                    );
                                }}
                            >
                                <p>What's the meaning of the number 7? </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (

                    <div className="result">
                   <div className="result-title">
    <img src="https://vectorified.com/images/avatar-icon-png-18.jpg" alt="User" />
    <p>{recentPrompt}</p>
</div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={handleInputChange}
                            onKeyPress={handleInputKeyPress}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img
                                src={assets.send_icon}
                                alt=""
                                onClick={() => {
                                    onSent();
                                }}
                            />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>
                            Tech-GPT may display inaccurate info, including about people, so
                            double-check its responses. Your privacy & Tech-GPT Apps
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Mane
