
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
                }
                .nav-link {
                    color: #4b5563;
                    font-weight: 500;
                    padding: 0.5rem 0;
                    margin: 0 0.75rem;
                    position: relative;
                    transition: all 0.2s ease;
                }
                .nav-link:hover {
                    color: #6366f1;
                    transform: translateY(-2px);
                }
                .active {
                    color: #6366f1;
                }
                .active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #6366f1;
                    transform: scaleX(1);
                    transition: transform 0.2s ease;
                }
                .dropdown {
                    position: relative;
                    display: inline-block;
                }
                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: white;
                    min-width: 200px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    z-index: 50;
                    border-radius: 0.5rem;
                    padding: 0.5rem 0;
                    margin-top: 0;
                    opacity: 0;
                    transform: translateY(0);
                    transition: all 0.2s ease;
                    pointer-events: none;
                }
                .dropdown:hover .dropdown-content {
                    display: block;
                    opacity: 1;
                    pointer-events: auto;
                }
.dropdown-item {
                    display: block;
                    padding: 0.5rem 1.5rem;
                    color: #4b5563;
                    transition: all 0.2s ease;
                }
                .dropdown-item:hover {
                    background-color: #f8fafc;
                    color: #6366f1;
                    padding-left: 1.75rem;
                }
                .dropdown-title {
                    cursor: pointer;
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    margin: 0 0.75rem;
                    height: 100%;
                }
.dropdown-title::after {
                    content: '';
                    display: inline-block;
                    margin-left: 0.25rem;
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 5px solid currentColor;
                    transition: transform 0.2s ease;
                }
                .dropdown:hover .dropdown-title::after {
                    transform: rotate(180deg);
                }
                /* Remove gap between dropdown and menu */
                .dropdown {
                    padding-bottom: 8px;
                }
                .dropdown-content {
                    top: 100%;
                    padding-top: 8px;
                }
</style>
            <nav class="fixed w-full z-50">
                <div class="container mx-auto px-4 py-6">
<div class="flex justify-between items-center">
                        <div class="flex flex-col">
                            <a href="/" class="text-4xl font-extrabold text-indigo-700 hover:text-indigo-600 transition-colors font-serif tracking-tight mb-1">Benedict</a>
                            <a href="/" class="text-xl font-semibold text-gray-600 hover:text-gray-800 transition-colors font-serif tracking-wider">Luke</a>
</div>
                        <div class="hidden md:flex items-center space-x-4 mt-2">
<a href="/" class="nav-link active">Home</a>
                            
                            <div class="dropdown">
                                <span class="nav-link dropdown-title">Personal</span>
<div class="dropdown-content">
                                    <a href="/life.html" class="dropdown-item">Life in Thailand</a>
                                    <a href="/travel.html" class="dropdown-item">Travel Diaries</a>
                                    <a href="/culture.html" class="dropdown-item">Cultural Experiences</a>
                                </div>
                            </div>
                            <div class="dropdown">
                                <span class="nav-link dropdown-title">Projects</span>
<div class="dropdown-content">
                                <a href="/projects/thaiapp.html" class="dropdown-item">Thai Language App</a>
                                <a href="/projects/nomadguide.html" class="dropdown-item">Nomad Guide</a>
                                <a href="/projects/techsolutions.html" class="dropdown-item">Local Tech Solutions</a>
                                <a href="/projects/all.html" class="dropdown-item">All Projects</a>
</div>
                            </div>
                            <a href="/contact.html" class="nav-link active">Contact</a>
</div>
                        <button class="md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors">
                            <i data-feather="menu" class="w-6 h-6 text-gray-600"></i>
                        </button>
</div>
                </div>
            </nav>
`;
    }
}

customElements.define('custom-navbar', CustomNavbar);