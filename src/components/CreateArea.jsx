import { useState } from "react";

const CreateArea = (props) => {
    const [inputContent, setContent] = useState({title: '', content: ''});
    

    const addContent = (event) => {
        const { name, value } = event.target;
        setContent(() => ({ ...inputContent, [name]: value }));
        
    }

    const passTaskToButton = (event) => {
        event.preventDefault();
        props.onAdd(inputContent);
        setContent({ title: '', content: '' });
    }

    return (
        <div>
            <form>
                <input onChange={addContent} name="title" placeholder="Title" value={inputContent.title} />
                <textarea
                    onChange={addContent}
                    value={inputContent.content}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={passTaskToButton} >Add</button>
            </form>
        </div>
    );
};

export default CreateArea;
