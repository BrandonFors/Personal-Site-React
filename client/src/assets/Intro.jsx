import React, { useState, useEffect } from 'react';

function Intro() {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const textArray = [
        'Computer Engineering',
        'Artificial Intelligence',
        'Web Development',
        'Databases',
        'Computer Science',
        'Software',
    ];
    const pauseTime = 2000;

    useEffect(() => {
        const currentText = textArray[loopIndex % textArray.length];
        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayText((prev) => currentText.substring(0, prev.length + 1));
                if (displayText === currentText) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            } else {
                setDisplayText((prev) => currentText.substring(0, prev.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setLoopIndex((prev) => prev + 1);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopIndex, typingSpeed]);

    return (
        <div className="flex flex-col items-start justify-center p-6">
            <h2 className="text-2xl">
                Hey there! I'm<span className="text-orange">...</span>
            </h2>
            <h1 className="font-bold text-6xl text-blue my-2">Brandon Forseth</h1>
            <h2 className="text-2xl">
                <span className="text-orange">...</span>and I'm interested <br />
                in{' '}
                <span className="text-orange">
                    {displayText}
                </span>
                <span className="animate-blink">|</span>

            </h2>
        </div>
    );


}

export default Intro;
