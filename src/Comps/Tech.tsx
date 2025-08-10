import React from 'react';

const Tech = () => {
    return (
        <div>
            <section
                className="bg-black h-screen flex items-center justify-center text-white text-4xl snap-start"
                style={{
                    backgroundImage: "url('/tech-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}
            >
              TECHS and stacks
            </section>
        </div>
    )
}

export default Tech