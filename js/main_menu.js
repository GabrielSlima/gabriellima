$(document).ready(function(){

    var menu_model = {
        parent_div_menu: [{
            vertical_position: 0
        }],
        menu_header_visualization: [{
            default_bootstrap_menu_type: "navbar-dark",
            default_bootstrap_menu_color: "bg-dark"
        }],
        menu_default_visualization: [{
            default_bootstrap_menu_type: "navbar-light",
            default_bootstrap_menu_color: "bg-light"
        }]
    };

    var menuController = {
        init: function() {
            view.init();
        },

        setParentDivMenuVerticalPosition: function(vertical_position){
            menu_model.parent_div_menu.vertical_position = vertical_position;
        },
        getParentDivMenuVerticalPosition: function(){
            return menu_model.parent_div_menu.vertical_position;
        }
    }

    var view = {
        init: function(){
            this.main_div_menu_parent = $('#div-main-menu-parent');
            this.main_nav_menu_children = $('#nav-main-menu-parent');
            menuController.setParentDivMenuVerticalPosition(this.main_div_menu_parent.offset().top);
                        
            this.render();
        },

        render: function(){            
            var main_div_menu_parent = this.main_div_menu_parent;
            var main_nav_menu_children = this.main_nav_menu_children;

            var parent_div_menu_initial_vertical_position = menuController.getParentDivMenuVerticalPosition();

            $(window).scroll(function(){
                if($(window).scrollTop() >= parent_div_menu_initial_vertical_position) {
                    $(main_nav_menu_children).addClass('navbar-light');
                    $(main_nav_menu_children).addClass('bg-light');
                    $(main_nav_menu_children).removeClass('navbar-dark');
                    $(main_nav_menu_children).removeClass('bg-dark');
                
                    $(main_div_menu_parent).addClass('fixed-top-main-menu');
                } else {
                    $(main_nav_menu_children).removeClass('navbar-light');
                    $(main_nav_menu_children).removeClass('bg-light');
                    $(main_nav_menu_children).addClass('navbar-dark');
                    $(main_nav_menu_children).addClass('bg-dark');
                
                    $(main_div_menu_parent).removeClass('fixed-top-main-menu');
                }
            });
        }
    }
    
    menuController.init();

});

