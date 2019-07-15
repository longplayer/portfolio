<template>
    <div id="nav" :class="{'is-open': isOpen}">
        <nav class="menu">
            <button class="menu-toggle" @click="isOpen=!isOpen"><ui-icon>menu</ui-icon></button>
            <router-link to="/">
                <ui-icon>home</ui-icon>
                <span class="label">Home</span>
                <ui-tooltip :position="'left'" :animation="'shift-away'">Home</ui-tooltip>
                <!-- <ui-fab
                    color="primary"
                    icon="home"
                    tooltip-position="left"
                    tooltip="Home"
                    ariaLabel="Home"
                    size="small"
                ></ui-fab> -->
            </router-link>
            <router-link :to="{name: 'about'}">
                <ui-icon ariaLabel="About">person</ui-icon>
                <span class="label">About</span>
                <ui-tooltip :position="'left'" :animation="'shift-away'">About</ui-tooltip>
                <!-- <ui-fab
                    color="primary"
                    icon="person"
                    tooltip-position="left"
                    tooltip="About"
                    ariaLabel="About"
                    size="small"
                ></ui-fab> -->
            </router-link>
            <router-link :to="{name: 'works'}">
                <ui-icon ariaLabel="Works/Projects">school</ui-icon>
                <span class="label">Works/Projects</span>
                <ui-tooltip :position="'left'" :animation="'shift-away'">Works/Projects</ui-tooltip>
            </router-link>
            <router-link :to="{name: 'contact'}">
                <ui-icon ariaLabel="Contact">mail</ui-icon>
                <span class="label">Contact</span>
                <ui-tooltip :position="'left'" :animation="'shift-away'">Contact</ui-tooltip>
            </router-link>
            <router-link :to="{name: 'doc'}">
                <ui-icon ariaLabel="Documentation">info</ui-icon>
                <span class="label">Documentation</span>
                <ui-tooltip :position="'left'" :animation="'shift-away'">Documentation</ui-tooltip>
            </router-link>

        </nav>
        <!-- <div class="side-menu"></div> -->
    </div>
</template>

<script>
import 'keen-ui/src/bootstrap';
import UiButton from 'keen-ui/src/UiButton.vue';

export default {
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        UiButton
    }
}
</script>


<style lang="scss" scoped>
#nav {
    position: fixed;
    padding: 25px;
    background-color: $brand-primary-color;
    width: 90px;
    left: inherit;
    right: 0;
    top: 0;
    bottom: 0;
    transition: width 400ms ease-out;
    display: flex;

    .menu {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: auto;

        a {
            font-weight: bold;
            color: #FAFAFA;
            text-decoration: none;
            display: inline-block;
            height: 40px;
            width: 100%;
            line-height: 40px;
            text-align: center;
            font-weight: 100;

            &.router-link-exact-active {
            color: #ffc048;
            }

            &:hover {
                color: #666;
                text-decoration: underline;
            }

        }

    }

    .label {
        display: none;
    }

    .menu-toggle {
        color: #FAFAFA;
        outline: none;
        border: none;
        border-radius: 0;
        -webkit-appearance: none;
        background-color: inherit;
        padding: 0px;
        // border: 1px solid #fff;
        margin: auto;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    &.is-open {
        width: 240px;

        a {
            text-align: left;
        }

        .label {
            display: inline-block;
            margin-left: 10px;
        }

        .menu-toggle {
            margin-left: 0;
        }
    }
}

</style>

<style>
.tippy-popper {
    transform: translate(-30px, 5px);
}
.is-open .tippy-popper {
    display: none;
    visibility: hidden;
    opacity: 0;
}
</style>
