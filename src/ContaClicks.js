import React, {useState} from 'react';

function ContaClicks() {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>Clicar</button>
        </div>
    )
}

export default ContaClicks;