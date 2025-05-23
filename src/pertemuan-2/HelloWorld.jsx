export default function HelloWorld(){
    const propUSerCard = {
        nama: "Goku",
        nim: "9999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QouteText/>
            <UsedCard
                nama="fariz"
                nim="235530109"
                tanggal={new Date().toLocaleDateString()}
            />
            <UsedCard {...propUSerCard}/>

            {/* <img src="img/download.jpg" alt="logo" /> */}
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari Binjai</small>
    )
}

function QouteText(){
    const text = "mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";

    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UsedCard(props){
    return(
        <div >
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}