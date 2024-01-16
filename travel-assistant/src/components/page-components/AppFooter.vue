<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h1 class="logo-text"><span>Journey</span>Genius</h1>
                <hr />
                <div class="footer-bottom">
                    &copy; 2024 TeamSix, All rights reserved.
                    <div class="social-media">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="../assets/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <img src="../assets/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="../assets/instagram.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.footer {
    background-color: #3498db;
    color: #fff;
    padding: 1px 10px 10px 10px;
    font-size: 0.8em;
    border-radius: 5px;
    bottom: 8px;
}

hr {
    color: #fff;
    opacity: 0.5;
    margin: 10px
}

.footer-bottom {
    display: flex;
    align-items: center;
}

.footer-bottom img {
    width: 30px;
    margin-left: 10px;
    margin-right: 10px;
}

.logo-text {
    font-size: 2em;
    margin-bottom: 10px;
    text-align: center;
}

.social-media {
    margin-left: auto;
}
</style>