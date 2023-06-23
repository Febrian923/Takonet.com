document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;

    // Kirim data survei ke server atau lakukan tindakan lainnya
    console.log("Nama: " + name);
    console.log("Email: " + email);
    console.log("Penilaian: " + rating);
    console.log("Komentar: " + comments);

    // Reset formulir setelah pengiriman
    document.getElementById('surveyForm').reset();
});
