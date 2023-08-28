

export const genNewsSlug = (title, id) => {
    // Chuyển hết sang chữ thường
    let slug = title.toLowerCase();

    // xóa dấu
    slug = slug.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    slug = slug.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    slug = slug.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    slug = slug.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    slug = slug.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    slug = slug.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    slug = slug.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    slug = slug.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    slug = slug.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    slug = slug.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    slug = slug.replace(/-+$/g, '');

    return slug + '-' + id;
};


export const getNewsIdFromUrl = (slug = '') => {
    let arr_slug = slug.split('-');
    let id = parseInt(arr_slug[arr_slug?.length - 1]);
    return id;
};

export const navToNewsDetail = (itemTitle, itemId, languageCode, navigate) => {
    let slug = genNewsSlug(itemTitle, itemId);
    navigate(`/news/${slug}/${languageCode}`);
};

export const navToGuideDetail = (itemTitle, itemId, languageCode, navigate) => {
    let slug = genNewsSlug(itemTitle, itemId);
    navigate(`/guides/${slug}/${languageCode}`);
};

export const phoneRegex = /^([0]|\+*[1-9][0-9]{0,2})[1-9][0-9]{8}$/;

export const validatePhone = (phone) => {
    // let phoneRegex = /^([0]|\+*[1-9][0-9]{0,2})[1-9][0-9]{8}$/;
    return phoneRegex.test(phone);
};

export const validateEmail = (email) => {
    let emailRegex = /^(\w|\d|\.){3,253}@[a-z]+(\.[a-z]+){1,3}$/;
    // let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])[0-9a-zA-Z!@#$%^&+=]{8,}$/; //mat khau bao gom chu hoa, chu thuong, so, ky tu dac biet, dai it nhat 8 ky tu
    // return passwordRegex.test(password);
    return password.length > 5; //mat khau dai it nhat 6 ky tu
};

export const validateBirthday = (birthday) => {
    let birthdayRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    return birthdayRegex.test(birthday);
};

export const validateNumber = (number) => {
    let numberRegex = /^\d+$/;
    return numberRegex.test(number);
};