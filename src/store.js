const store = {
    state: {
        user: {
            fullname: "",
            pass: "",
            role: "",
            email: "",
            id: "",
            cart: [],
        },
        logged: false,
    },
    loggingUser(form) {
        this.state.user = form;
        this.state.logged = true;
    },
    logoutUser() {
        this.state.user = {
            fullname: "",
            pass: "",
            role: "",
            email: "",
            id: "",
            cart: [],
        };
        this.state.logged = false;
    },
    editUserInfo(userUpdated) {
        console.log("store - editUserInfo...");
        this.state.user = userUpdated;
    },
    addItemToCart(item) {
        if (this.isInCart(item)) {
            this.state.user.cart.forEach((i) => {
                if (i.id === item.id) {
                    i.q = i.q + item.q;
                }
            });
        } else {
            this.state.user.cart.push(item);
        }
    },
    isInCart(i) {
        return this.state.user.cart.find((item) => item.id === i.id);
    },
    deleteItemFromCart(itemId) {
        this.state.user.cart = this.state.user.cart.filter((item) => {
            return item.id !== itemId;
        });
    }
}

export default store;