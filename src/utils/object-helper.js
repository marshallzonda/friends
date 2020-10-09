
export const updateObjectInArray = (items,itemId,objPropName,newObjProps) =>{

   return  state.users.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u
    })
}