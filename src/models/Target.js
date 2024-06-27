class Target {
    constructor(id, description, targets, targetType) {
        this.id = id;
        this.description = description;
        this.targets = targets;
        //    4, 5, 6
        //user1, 2, 3
        this.targetType = targetType;
        //0: OR
        //1: AND
    }

    static makeArray(objArray) {
        return objArray.map((targetObj) => {
            return new Target(
                targetObj.id,
                targetObj.description,
                targetObj.targets,
                targetObj.targetType
            );
        });
    }
}

export default Target;
