const ApiService = {

    ListaBancos: () => {
        return fetch('http://localhost:8080/bancos')
            .then(res => ApiService.trataErros(res))
            .then(res => res.json())
    },


    criaBanco: banco => {
        return fetch('http://localhost:8080/bancos',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: banco
            }
        )
        .then(res => ApiService.trataErros(res))
        .then(res => res.json());
    },


    removeBanco: codigo => {
        return fetch(`http://localhost:8080/bancos/${codigo}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
        .then(res => ApiService.trataErros(res))
        .then(res => res);
    },

    trataErros: res => {
        if (!res.ok) {
            console.log(res);
            throw Error(res.statusText);
        }
        return res;
    }

}

export default ApiService