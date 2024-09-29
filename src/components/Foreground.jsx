import React ,{useRef} from 'react'
import Card from './Card'

function Foreground() {

    const ref=useRef(null);
    const data=[
        {
            desc:"abcde aadnjefkn jfndkf jscn jfskoiffn kjnds",
            filesize:".9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now", tagColor:""},

        },
        {
            desc:"abcde aadnjefkn jfndkf jscn jfskoiffn kjnds",
            filesize:".9mb",
            close:true,
            tag:{isOpen:false,tagTitle:"Upload", tagColor:"blue"},

        },
        {
            desc:"abcde aadnjefkn jfndkf jscn jfskoiffn kjnds",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now", tagColor:"yellow"},

        },
        {
            desc:"abcde aadnjefkn jfndkf jscn jfskoiffn kjnds",
            filesize:".9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Modify Now", tagColor:"blue"},

        },
        {
            desc:"abcde aadnjefkn jfndkf jscn jfskoiffn kjnds",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now", tagColor:"green"},

        }
    ];


    return (
        <div ref={ref} className='fixed z-[3] top-0 left-0 z-[3] w-full h-full flex gap-4 flex-wrap '>
            {/* <Card/>
            <Card/> */}
            {data.map((item,index)=>(
                <Card  data={item} reference={ref}/>
            ))}
      </div>
        
    )
}

export default Foreground
