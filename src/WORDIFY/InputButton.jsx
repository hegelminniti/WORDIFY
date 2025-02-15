export function InputButton({ lettera, cellIndex, setCellIndex, rowIndex, clickFunction, setTentativo, assente, verde}) {


    const handleClick = () => {

        if(!clickFunction){
            const wordCells = document.querySelectorAll('.wordCellsContainer')[rowIndex]?.children;
    
            if (cellIndex < wordCells?.length) {
                wordCells[cellIndex].innerText = lettera;
                if(wordCells[cellIndex].innerText){
                    setCellIndex(cellIndex + 1);
                    setTentativo((letterePrecedente) => letterePrecedente + lettera)

                }
            }
        } else {
            clickFunction()
        }
    };

    return (
        <div>
            <button className={`button  ${assente? "disabledButton" : ""} ${verde? "correctButton" : ""} `} onClick={handleClick} value={lettera}>{lettera}</button>
        </div>
    );
}

