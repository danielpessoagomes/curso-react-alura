const ApiService = {

    ListaBancos: () => {
        return fetch('http://localhost:8080/bancos')
            .then(res => res.json());
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
        ).then(res => res.json())
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
            .then(res => res);
    }

}

export default ApiService