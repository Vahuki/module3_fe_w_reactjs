function InputFind({handleSearch}) {

    return (
        <div className="mb-3">
            <input type="text" onChange={handleSearch} />
        </div>
    );
}
export default InputFind;