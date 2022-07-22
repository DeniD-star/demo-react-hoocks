import { useEffect, useState } from "react";//hooks mogat da suzdavat sobstven state; mogat da izpolzvat drugi hooks

const useFetch = (url, defaultValue) => {//defaultValue se vzima otvun,tozi koito vika useFetch, toi re6ava defaultValue

    const [data, setData] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(result => result.json())
            .then(result => {
                setIsLoading(false)
                setData(Object.values(result));
            })
    }, [url])

    //kato edin komponent , izpolzva useEffect, hooks 6te ima vsi4kite fasi mount, update,unmount.
    //V slu4aq useEffecta 6te dependva na url-a, ako se promeni url-a, 6te napravi zaqvkata nanovo
    return [data, setData, isLoading];
}

export default useFetch;