import axios from "axios";
import { ADD_TO_CART } from "../../Utils/APIs";
import { CONFIG } from "../../Utils/Auth/Config";
import { handleShowAlert } from "../Alerts/handleShowAlert";

export const addToCart = async (customImg) => {
    const product = JSON.parse(window.localStorage.getItem('custom_order')) || {};
    if(!product.product_id){
        handleShowAlert(421, 'يجب اختيار المنتج أولا');
        return;
    }
    try {
        const formData = new FormData();
        const isCustomOrder = Object.keys(product).some(key => ['example_id', 'name_id', 'logo_id', 'image_id', 'image', 'number', 'printtype_id', 'sizedirection', 'print_color', 'material_id', 'model_id'].includes(key) && product[key]);

        if (isCustomOrder) {
            if (product.example_id && !customImg) formData.append('example_id', product.example_id);
            if (product.name_id && !customImg) formData.append('name_id', product.name_id);
            if (product.logo_id && !customImg) formData.append('logo_id', product.logo_id);
            if (product.number && !customImg) formData.append('number', product.number);
            if (product.printtype_id) formData.append('printtype_id', product.printtype_id);
            if (product.sizedirection) formData.append('sizedirection', product.sizedirection);
            if (product.print_color) formData.append('print_color', product.print_color);
            if (product.material_id) formData.append('material_id', product.material_id);
            if (product.model_id) formData.append('model_id', product.model_id);
            
            if (customImg) {
                formData.append('image', customImg[0]);
            }else {
                if (product.image_id) formData.append('image_id', product.image_id);
            }

            formData.append('order_type', "custom");
        }

        if (product.product_id) formData.append('product_id', product.product_id);
        if (product.color_id) formData.append('color_id', product.color_id);
        if (product.size_id) formData.append('size_id', product.size_id);
        formData.append('quantity', product.quantity)
        
        const res = await axios.post(ADD_TO_CART, formData, CONFIG);
        handleShowAlert(res.data.statusCode, res.data.message);
        window.localStorage.removeItem('custom_order');
    } catch (error) {
        console.log("Error adding to cart:", error);
    }
};
