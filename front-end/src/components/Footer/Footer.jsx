import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Shop Quần Áo</h2>
            <p className="text-gray-300">
              Chúng tôi mang đến cho bạn những mẫu quần áo thời trang, chất
              lượng, và giá cả hợp lý.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Đường ABC, Phường XYZ, TP Hồ Chí Minh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span>shopquanao@example.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Liên Kết Nhanh
            </h2>
            <nav className="space-y-4">
              <Link
                to="/about"
                className="block text-gray-300 hover:text-pink-300 transition-colors duration-200 hover:translate-x-2 transform"
              >
                Về Chúng Tôi
              </Link>
              <Link
                to="/policy"
                className="block text-gray-300  transition-colors duration-200 hover:translate-x-2 hover:text-pink-300 transform"
              >
                Chính Sách Đổi Trả
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-pink-300 transition-colors duration-200 hover:translate-x-2 transform"
              >
                Liên Hệ
              </Link>
              <Link
                to="/faq"
                className="block text-gray-300 hover:text-pink-300 transition-colors duration-200 hover:translate-x-2 transform"
              >
                Câu Hỏi Thường Gặp
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Theo Dõi Chúng Tôi
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300">
                Kết nối với chúng tôi trên các mạng xã hội để nhận được những
                thông tin mới nhất về sản phẩm và khuyến mãi.
              </p>
              <div className="flex space-x-6">
                <Link
                  to="https://facebook.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Facebook className="h-8 w-8" />
                </Link>
                <Link
                  to="https://instagram.com"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
                <Link
                  to="https://twitter.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Twitter className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300">
            &copy; {currentYear} - Copyright by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent font-bold">
              @Thu
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
