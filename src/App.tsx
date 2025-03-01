import React, { useEffect, useState } from "react";
function App() {
    const [count, setCount] = useState<number>(0);

    const [texto, setTexto] = useState<string>("");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTexto(e.target.value);
    };

    const countPalabras = () => {
        const palabras = texto.trim().split(/\s+/);
        setCount(texto.trim() === "" ? 0 : palabras.length);
    };

    useEffect(() => {
        countPalabras();
    }, [texto]);

    return (
        <>
            <h2 className="text-center font-bold text-4xl">
                Contador de palabras
            </h2>

            <section className="flex flex-col items-center justify-center mt-5">
                <label htmlFor="" className="flex flex-col font-medium gap-1">
                    Ingresa el texto
                    <input type="text" onChange={handleOnChange} className="border-2 rounded-lg w-[320px] p-2" placeholder="Ingresa una frase" />
                </label>
                <p className="mt-2 font-semibold text-lg">
                  Tu texto contiene 
                    <span className="font-bold mx-1" >
                    {count}
                    </span>
                  palabras
                </p>
            </section>
        </>
    );
}

export default App;
