AFRAME.registerComponent('tour',{

    init:function(){
        this.placesContainer= this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnails=[
            {id:'avengers', title:'The Avengers', url:'./assets/comics/avengers.jpg'},
            {id:'dr.strange', title:'Dr. Strange', url:'./assets/comics/dr.strange.jpg'},
            {id:'spiderman', title:'Spiderman', url:'./assets/comics/spiderman.jpg'},
            {id:'thor', title:'Thor', url:'./assets/comics/thor.jpg'},
        ]
        let previousX= -60
        for(var i of thumbnails){
            const posX=previousX+25
            const posY=10
            const posZ=-40
            const position={x:posX, y:posY, z:posZ}
            previousX=posX
            const border=this.createBorder(position, i.id)
            const thumbnail= this.createThumbnails(i)
            border.appendChild(thumbnail)
            const title=this.createTitle(position, i)
            border.appendChild(title)
            this.placesContainer.appendChild(border)
        }
    },

    createBorder:function(position, id){
        const entity= document.createElement('a-entity')
        entity.setAttribute("id", id)
        entity.setAttribute("visible", true)
        entity.setAttribute('geometry', {primitive:'ring', radiusInner:9, radiusOuter:10})
        entity.setAttribute('position', position)
        entity.setAttribute('material',  {color:'brown',opacity:1})
        return entity
    },

    createThumbnails:function(i){
        const entity= document.createElement('a-entity')
        entity.setAttribute('visibile', true)
        entity.setAttribute('geometry', {primitive:'circle', radius:9})
        entity.setAttribute('material', {src:i.url})
        return entity
    },

    createTitle:function(position, i){
        const entity= document.createElement('a-entity')
        entity.setAttribute('text', {font:'exo2bold', align:'center', width:70, color:'brown', value:i.title})
        const elPosition=position
        elPosition.y=-20
        entity.setAttribute('position', elPosition)
        entity.setAttribute('visible', true)
        return entity
    }
})
