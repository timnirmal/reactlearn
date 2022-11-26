import Image from "./Image";

export default function Gallery({person: {name, age}, endText}) {
    return (
        <div>
            <h1>Gallery</h1>
            <p>{name}</p>
            <p>{age}</p>
            {/*{images.map((image, index) => <Image key={index} src={image}/>)}*/}
            <Image/>
            <p>{endText}</p>
        </div>
    );
}