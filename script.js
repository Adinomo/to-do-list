let input = document.querySelector('.enter-list');
let addBtn = document.querySelector('.add-list');
let task = document.querySelector('.task');

//add btn disabled

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
});

// JIKA user mengetik sesuatu di input
//     JIKA input tidak kosong (setelah spasi dihapus)
//         AKTIFKAN tombol tambah
//     JIKA input kosong
//         NONAKTIFKAN tombol tambah


// add new item to list

addBtn.addEventListener('click', () => {
 if (input.value.trim() != 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <p> ${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-xmark"></i>
            </div> `;
    task.appendChild(newItem);
    input.value = '';
 } else {
    alert('Masukkan tugas terlebih dahulu');
 }
})

// JIKA tombol tambah diklik
//     JIKA input tidak kosong
//         BUAT item tugas baru
//         ISI item dengan:
//             - teks tugas
//             - tombol edit
//             - tombol hapus
//         MASUKKAN item ke daftar tugas
//         KOSONGKAN input
//     JIKA input kosong
//         TAMPILKAN pesan peringatan


//delete item to list

    task.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-xmark')) {
            e.target.parentElement.parentElement.remove();
        }
    })

    // JIKA ada klik di area daftar tugas
    // JIKA yang diklik adalah tombol hapus
    //     HAPUS item tugas tersebut


// mark item completed

    task.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-pencil')) {

        }
        e.target.parentElement.parentElement.classList.toggle('completed');
    })

    // JIKA yang diklik adalah tombol edit
    // JIKA item belum selesai
    //     TANDAI item sebagai selesai
    // JIKA item sudah selesai
    //     HAPUS tanda selesai


