import React,{} from 'react';
import axios from 'axios';
import * as CONSTANT from './constant';

/**
 * 
 * @param {string} param 
 * @description Http get call using axios
 */

import ToastServive from 'react-material-toast';
const toast = ToastServive.new({
    place:'bottomLeft',
    duration:2,
    maxCount:8
  });

export function validateImage(id) {
    var formData = new FormData();
    var file = document.getElementById(id).files[0];
    formData.append("Filedata", file);
    var t = file.type.split("/").pop().toLowerCase();
    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        //   alert('Please select a valid image file');
        const id = toast.error('Please select a valid image file!');
       // document.getElementById(id).value = "";
        return false;
    }
    if (file.size > 1024000) {
        const id = toast.error('Max Upload size is 1MB only!');
        return false;
    }
    return true;
}