function filterImages(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        // Show all images if 'all' category is selected
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            // If the item belongs to the selected category, show it
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                // Hide images that don't belong to the selected category
                item.style.display = 'none';
            }
        }
    });
}
