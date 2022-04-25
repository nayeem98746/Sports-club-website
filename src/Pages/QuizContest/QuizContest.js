import React, { useState } from 'react';

const QuizContest = () => {
    const [select, setSelect] = useState("")
    const quiz = {
        question: "Is Windows better than Debian/Ubuntu?",
        options: [
            {
                opt: "Yes, Of course!!!"
            },
            {
                opt: "Obviously, no."
            },
            {
                opt: "I think windows is better"
            },
            {
                opt: "Debian/Ubuntu"
            }
        ]
    }

    /* const handleSelectedOpt = (e) => {
        setSelect(e.target.id);
    } */
    let para = document.getElementsByName("option");

    [...para].forEach(elem => elem.addEventListener('click', readValue));

    function readValue(e) {
        let text = e.target.textContent;
        setSelect(text);
    }
    console.log(select);
    return (
        <div>
            <h3 className='p-4'>Hello and welcome to the QUIZ CONTEST!!!</h3>
            <div className='p-3'>
                <h1 className='display-5 text-center'>{quiz.question}</h1>
                <div className='mt-4'>
                    {
                        quiz.options.map((option, index) => {
                            console.log(option);
                            return (
                                <>
                                    <div key={index} role="button" className={`my-2  px-1 py-2 mx-auto bg-success w-75 rounded text-center text-warning ${select === option.opt && `text-white`}`} name="option">
                                        <p>{option.opt}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='my-4 w-75 mx-auto'>
                    <button className='btn btn-warning rounded-pill py-1 px-4 d-block ms-auto'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default QuizContest;