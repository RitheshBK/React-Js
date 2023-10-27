import useFetch from './UseFetch';

export default function CustomHooks(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    return (
        <>
         {
            data && data.map((item) => {
                return <p iscompleted={item.completed} key={item.id} id={item.id}>{item.title}</p>;
            })
         }
        </>
    )
} 