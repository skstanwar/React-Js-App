
function Home(props){
    const temp = ['Ford', 'BMW', 'Audi'];    
    
    return (
        <div>
            <h1>Home</h1>
            <h1>This section is for {props.name}</h1>
            {temp.map((data)=><h>{data}</h>)}
        </div>

    )
}
export default Home;