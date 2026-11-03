const root = ReactDOM.createRoot(document.getElementById('root'));

const Student = ({name, age}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age:  {age?? "Unknown"}</p>
        </div>
    );
};

root.render(
    <>
    <Student name = {"John"} age = {20} />
    <Student name = {"Alice"} age = {22} />
    <Student name = {"Bob"}  />
    </>
)