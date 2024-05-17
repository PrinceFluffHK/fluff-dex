import React from 'react';

const ShopListItem = (props) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        if (open) {
            return setOpen(false);
        }
        return setOpen(true);
    };

    return <Grid item lg={4}></Grid>;
}

export default ShopListItem