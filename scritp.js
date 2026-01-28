document.querySelectorAll('.btn-more').forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = "ກຳລັງໂຫຼດ...";
        this.style.background = "#27ae60";
        
        setTimeout(() => {
            alert("ຂໍອະໄພ, ລະບົບເນື້ອຫາລະອຽດກຳລັງປັບປຸງ!");
            this.innerHTML = "ອ່ານເພີ່ມເຕີມ";
            this.style.background = "#333";
        }, 800);
    });
});