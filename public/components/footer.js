class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
                    color: white;
                    position: relative;
                    overflow: hidden;
                }
                footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
                }
                .footer-content {
                    position: relative;
                    z-index: 1;
                }
                .social-icon {
                    transition: all 0.3s ease;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .social-icon:hover {
                    transform: translateY(-5px) scale(1.1);
                    background: rgba(255, 255, 255, 0.2);
                    color: #a5b4fc;
                    box-shadow: 0 4px 15px rgba(165, 180, 252, 0.3);
                }
                .quick-links li {
                    position: relative;
                    padding-left: 1.5rem;
                }
                .quick-links li::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: #818cf8;
                    transition: all 0.3s ease;
                }
                .quick-links li:hover::before {
                    transform: translateX(5px);
                }
                .quick-links a {
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .quick-links a:hover {
                    transform: translateX(5px);
                    color: white;
                }
                .footer-bg-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.05;
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
            </style>
            <footer class="py-16">
                <div class="footer-bg-pattern"></div>
                <div class="container mx-auto px-6 footer-content">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 class="text-2xl font-bold mb-6 text-white flex items-center">
                                <span class="bg-indigo-600 p-2 rounded-lg mr-3">
                                    <i data-feather="compass" class="w-6 h-6"></i>
                                </span>
                                Thai Adventures
                            </h3>
                            <p class="text-indigo-200 max-w-md">Documenting my coding journey and life in Thailand with projects, stories, and cultural insights.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-6 text-white border-b border-indigo-700 pb-3 inline-block">Quick Links</h3>
                            <ul class="quick-links space-y-3">
                                <li><a href="/" class="text-indigo-200 hover:text-white">Home</a></li>
                                <li><a href="/life.html" class="text-indigo-200 hover:text-white">Life in Thailand</a></li>
                                <li><a href="/projects/all.html" class="text-indigo-200 hover:text-white">Projects</a></li>
                                <li><a href="/contact.html" class="text-indigo-200 hover:text-white">Contact</a></li>
</ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-6 text-white border-b border-indigo-700 pb-3 inline-block">Connect</h3>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon text-white hover:text-indigo-200">
                                    <i data-feather="github" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="social-icon text-white hover:text-indigo-200">
                                    <i data-feather="twitter" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="social-icon text-white hover:text-indigo-200">
                                    <i data-feather="instagram" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="social-icon text-white hover:text-indigo-200">
                                    <i data-feather="linkedin" class="w-5 h-5"></i>
                                </a>
                            </div>
                            <div class="mt-6">
                                <p class="text-indigo-200">Subscribe to my newsletter</p>
                                <form class="mt-3 flex">
                                    <input type="email" placeholder="Your email" class="px-4 py-2 rounded-l-lg bg-indigo-900 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
                                    <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                                        <i data-feather="send" class="w-4 h-4"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300 flex flex-col md:flex-row justify-between items-center">
                        <p class="mb-4 md:mb-0">© ${new Date().getFullYear()} ThaiDev Adventures. All rights reserved.</p>
                        <div class="flex space-x-6">
                            <a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
`;
    }
}

customElements.define('custom-footer', CustomFooter);