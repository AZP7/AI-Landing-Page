import React from 'react'

function BgCircle({ className, borderColor }) {
    return (


        <div className={`bg-transparent w-[950px] h-[950px] border flex justify-center items-center rounded-full ${className}`}
            style={{ borderColor: borderColor }}>
            <div className={`border w-[760px] h-[760px] flex justify-center items-center rounded-full`}
                style={{ borderColor: borderColor }}>
                <div className={`border w-[570px] h-[570px] flex justify-center items-center rounded-full`}
                    style={{ borderColor: borderColor }}>
                    <div className={`border w-[380px] h-[380px] flex justify-center items-center rounded-full`}
                        style={{ borderColor: borderColor }}>
                        <div className={`border w-[190px] h-[190px] flex justify-center items-center rounded-full`}
                            style={{ borderColor: borderColor }}>
                            {/* inner content here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default BgCircle
