import { colors } from "../data/SampleData";

const ColorsList = () => {
    return (
        <>
            <h2>Color List</h2>
            <p>This component maps over the sample color data.</p>
            <ul>
                {colors.map(c => (
                    <li key={c}>{c}</li>
                )
            )}
        </ul >
        </>
    );
};

export default ColorsList;