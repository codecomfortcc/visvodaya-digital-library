const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
});

// Branch selection
const branches = ['Computer Science', 'Electronics', 'Electrical', 'Mechanical', 'Civil', 'Chemical', 'Bio-Technology', 'Others'];
const selectedBranchesContainer = document.getElementById('selectedBranches');
const branchSelect = document.getElementById('branches');

function createBranchTag(branch) {
    const tag = document.createElement('div');
    tag.className = 'branch-tag';
    tag.innerHTML = `
        ${branch}
        <button type="button" onclick="removeBranch('${branch}')">
            <i class="fas fa-times"></i>
        </button>
    `;
    return tag;
}

function removeBranch(branch) {
    const tag = selectedBranchesContainer.querySelector(`[data-branch="${branch}"]`);
    if (tag) {
        tag.remove();
    }
}

selectedBranchesContainer.addEventListener('click', () => {
    const currentBranches = Array.from(selectedBranchesContainer.children).map(tag => tag.textContent.trim());
    const availableBranches = branches.filter(branch => !currentBranches.includes(branch));
    
    if (availableBranches.length > 0) {
        const branch = availableBranches[0];
        const tag = createBranchTag(branch);
        tag.setAttribute('data-branch', branch);
        selectedBranchesContainer.appendChild(tag);
    }
});

// File uploads
const coverUpload = document.getElementById('coverUpload');
const pdfUpload = document.getElementById('pdfUpload');
const coverInput = document.getElementById('coverImage');
const pdfInput = document.getElementById('pdfFile');

coverUpload.addEventListener('click', () => coverInput.click());
pdfUpload.addEventListener('click', () => pdfInput.click());

coverInput.addEventListener('change', function() {
    if (this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            coverUpload.style.backgroundImage = `url(${e.target.result})`;
            coverUpload.style.backgroundSize = 'cover';
            coverUpload.style.backgroundPosition = 'center';
            coverUpload.querySelector('i').style.display = 'none';
            coverUpload.querySelector('p').style.display = 'none';
        }
        reader.readAsDataURL(this.files[0]);
    }
});

pdfInput.addEventListener('change', function() {
    if (this.files[0]) {
        const fileName = this.files[0].name;
        pdfUpload.querySelector('p').textContent = fileName;
    }
});

// Form submission
document.querySelector('.upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
});
