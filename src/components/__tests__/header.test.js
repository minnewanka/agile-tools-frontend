import React from 'react'
import { shallow, mount, render } from 'enzyme'

import HeaderApp from "../header/header"

describe('Header component testing', () => {
  it('should render header whitout throwing error', () => {
    expect(shallow(
      <HeaderApp />
    ).contains(
      <header className="app-header">
        <h3 className="logo-header">
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            width="80px" 
            height="80px" 
            viewBox="0 0 1320.048 858.439"
          >
            <g fill="#FFFFFF">
              <path d="M345.314 816.265l-2.081-.06c-92.3-2.687-158.345-32.406-191.02-85.944-54.345-89.117-6.756-228.525 127.311-372.927l11.112-11.966-2.288 16.159c-6.923 49.025 13.94 99.01 63.782 152.815v.007c51.143 55.285 75 107.07 72.926 158.314-1.961 48.445-28.273 96.283-78.209 142.188zm-68.438-440.858c-123.029 136.8-166.375 266.784-115.913 349.521 30.534 50.045 92.915 78.017 180.482 80.977 46.861-43.558 71.546-88.524 73.373-133.662 1.961-48.378-21.01-97.757-70.212-150.948-46.981-50.718-69.258-98.61-67.73-145.888z" /><path d="M295.567 855.817l-1.767-.093c-150.468-7.813-251.034-57.965-283.168-141.235-24.431-63.278-6.583-139.628 51.617-220.806 56.3-78.517 146.053-156.008 259.578-224.1l6.623 7.606c-23.11 28.626-36.29 56.278-40.3 84.544l-.22 1.587-1.1 1.18C157.949 503.036 109.64 641.224 160.756 725.143c30.781 50.438 93.916 78.457 182.569 81.024l12.692.367-9.391 8.54a511.142 511.142 0 0 1-49.609 39.725zm9.458-563.9C89.125 427.626-24.875 594.1 20.189 710.802c30.467 78.957 127.164 126.722 272.377 134.6a499.098 499.098 0 0 0 37.73-29.552c-85.646-4.946-147.133-34.332-178.294-85.384-54.271-89.1-7.077-228 126.237-371.774 3.452-22.483 12.27-44.509 26.79-66.775zM366.11 856.477l14.893-10.466a555.425 555.425 0 0 0 55.625-44.705l1.141-1.047 1.527-.24a907.462 907.462 0 0 0 202.652-56.618l6.243-2.553.787 6.7c2.421 20.679 5.342 39.752 7.617 54.058l.707 4.433-4.3 1.28a1217.844 1217.844 0 0 1-268.722 47.985zm76.3-46.585a564.902 564.902 0 0 1-40.965 33.919 1208.321 1208.321 0 0 0 244.331-45.032c-1.908-12.16-4.162-27.139-6.169-43.378a917.887 917.887 0 0 1-197.196 54.491zM723.267 785.073l1.721-8.766c3.5-17.8 6.743-41.805 9.9-73.384l.28-2.8 2.508-1.267a1302.36 1302.36 0 0 0 90.348-50.178c16.054-9.833 30.541-19.086 44.273-28.279l7.557-5.06.407 9.086c1.4 31.312 3.415 61.178 6 88.77l.327 3.547-3.208 1.54c-35.409 17.006-72.026 32.812-108.836 47-5.309 2.053-10.611 4.22-15.907 6.38-8.791 3.593-17.881 7.306-26.932 10.466zm21.536-78.344c-2.608 25.659-5.282 46.3-8.124 62.671 6.069-2.313 12.146-4.793 18.082-7.213 5.356-2.193 10.712-4.38 16.094-6.46a1482.173 1482.173 0 0 0 104.874-45.138c-2.194-24.072-3.962-49.8-5.276-76.677-11.6 7.633-23.811 15.373-37.09 23.506a1315.019 1315.019 0 0 1-88.562 49.311zM978.601 669.023l.647-9.693c2.708-40.739 4.082-80.63 4.082-118.576v-2.373l1.814-1.533c166.255-140.6 257.1-300.163 231.425-406.526l-2.815-11.66 10.378 6.033c40.185 23.4 67.537 53.691 81.29 90.05 49.062 127.136-78.909 307.709-318.458 449.331zm14.973-125.9c-.053 34.425-1.221 70.418-3.482 107.163 229.731-138.188 352.427-311.029 305.765-431.871l-.007-.033c-11.752-31.059-34.249-57.5-66.944-78.737 18.23 110.647-70.639 263.635-235.332 403.483z" /><path d="M1229.215 139.829l-10.258-6.02c-61.141-35.852-150.922-53.418-259.671-50.492l-5.256.133V49.132l-56.205 33.605v4.12l-4.615.46a1221.889 1221.889 0 0 0-173.565 30.119l-6.363 1.587V64.491l3.221-1.287c230.431-91.937 428.448-82.864 492.764 22.566a143.913 143.913 0 0 1 17.275 42.472zM981.683 72.785c94.49 0 173.919 15.833 231.658 46.2a133.916 133.916 0 0 0-12.826-27.886C1139.187-9.424 947.754-17.217 723.525 71.433v34.505a1232.381 1232.381 0 0 1 164.054-28.339v-.667l76.695-45.852v41.879q8.784-.171 17.408-.174zM495.548 192.867l-9.524-8.193 5.7-3.727c11.385-7.433 23.651-15.359 36.2-22.959a1299.033 1299.033 0 0 1 121.843-65.651l7.31-3.447v45.478l-3.655 1.093c-35.69 10.653-72.1 23.126-108.216 37.072-17.461 6.746-32.081 12.56-46.695 19.019zm151.282-87.79a1288.646 1288.646 0 0 0-111.077 60.138q2.831-1.1 5.756-2.227c35.136-13.566 70.545-25.752 105.321-36.239z" /><path d="M424.183 812.692l12.439-11.453c60.754-55.938 93.783-116.1 95.51-173.987 1.521-50.785-20.349-100.03-65-146.361-53.924-56.065-76.955-105.316-70.425-150.575 6.47-44.832 42.186-84.99 112.211-126.029l-22.1-18.893 7.61-3.233c17.741-7.533 32.7-13.626 47.075-19.173 36.5-14 73.16-26.559 108.969-37.332l6.6-1.987v63.538l56.205-33.545V108.47l3.882-.967a1231.8 1231.8 0 0 1 175.033-30.372l5.629-.56v110.636l56.205-33.545V73.485l4.989-.133c110.637-2.773 202.332 15.086 265.127 51.9l1.874 1.1.507 2.107c27.046 111.7-62.915 271.157-234.773 416.139l-8.464 7.146.04-11.08c.454-118.976-9.3-225.892-27.506-302.223l-58.587 35.032c-16.554 76.957-23.211 214.632-16.974 351.9l.133 2.893-2.414 1.607c-15.58 10.353-30.18 19.653-44.634 28.432-28.826 17.606-59.46 34.645-91.048 50.645l-8.337 4.227.927-9.3c13.466-135.322 10.838-336.988-19.816-465.437l-58.593 35.039c-22.45 103.53-25.852 315.282-7.5 474l.447 3.853-3.595 1.473a917.752 917.752 0 0 1-204.946 57.251zm81.877-624.325l20.549 17.573-6.323 3.607c-71.219 40.619-107.262 79.457-113.438 122.229-6.049 41.932 16.087 88.384 67.671 142.015 46.628 48.392 69.458 100.13 67.857 153.768-1.694 56.678-31.6 115.076-86.713 169.661a907.217 907.217 0 0 0 182.7-52.425c-18.082-160.334-14.3-372.853 8.591-475.683l.48-2.147 74.26-44.405 1.681 6.686c33.215 132.109 35.016 331.948 22.6 466.33 28.413-14.633 55.965-30.086 82.044-46.005 13.593-8.266 27.312-16.986 41.879-26.626-6.1-138.408.854-277.037 17.8-353.821l.474-2.16 74.267-44.405 1.681 6.686c18.882 75.177 29.287 181.487 29.467 300.336 159.859-137.6 247.1-292.15 223.481-396.593-60.154-34.565-147.293-51.638-252.795-49.518v76l-76.693 45.773V87.891a1222.282 1222.282 0 0 0-164.054 28.586v43l-76.696 45.766v-67.781c-33.462 10.246-67.624 22.033-101.639 35.079-12.152 4.693-24.751 9.786-39.131 15.826z" /><path d="M306.912 289.885a531.262 531.262 0 0 0-24.519 70.653c-9.835 37.341 2.937 57.956 20.489 96.184s56.96 78.5 88.309 119.736 26.568 90.314 22.607 127.586-49.106 85.4-49.106 85.4l-75.605 66.012s8.127.819 42.481.819h35.651l20.08-6.826 38.452-30.309 50.062-50.106 43.3-67.923s16.391-64.51 16.665-72.633-5.874-55.908-5.874-55.908-28.548-52.017-37.427-70.653-27.319-23.551-34.149-34.132-39.271-55.021-39.271-55.021l-21.79-76.732s18.645-52.017 35.31-69.834 70.62-55.977 76.63-59.868-8.879-11.741-8.879-11.741l1.912-8.874-29.433-26.692s-65.839 32.9-112.076 71.336c-34.149 28.534-42.549 42.87-42.549 42.87zM652.429 91.168s12.635-5.734 31.075-13.653 34.149-14.677 34.149-14.677l2.254 93.044-68.3 39.662zM652.429 271.113l65.5-39.047 17.348 75.091 5.942 83.76 5.942 110.11-.546 82.395-3.688 84.306-3.005 37.341-6.83 50.993-5.054 27.306s-9.63 3.755-34.968 11.878-38.93 11.878-38.93 11.878l-6.283-28.261-12.639-124.92-1.844-88.744.546-116.049 6.83-112.909zM984.288 644.655l-1.3 21.776s-24.724 14.472-48.969 27.306-49.311 24.37-49.311 24.37l-5.942-32.016-4.508-92.225-1.5-84.306 3.005-90.45 7.24-89.426 8.742-58.093 66.8-38.706 13.66 64.783 10.791 90.791 3.005 67.172 2.459 82.6-1.5 84.238zM891.813 82.225l67-42.597.751 117.005-66.863 39.047-.888-113.455zM1183.519 563.443l-24.093 44.818c-2.677 4.683-7.362 4.683-12.716 2.007l-16.731-9.365 12.716 68.231c2.677 12.71-6.023 12.71-10.039 7.358l-30.117-34.116-4.685 17.392c-.669 2.007-3.346 4.683-6.693 4.014l-38.148-8.027 10.039 36.122c2.008 8.027 4.016 11.372-2.008 13.379l-13.385 6.689 65.587 53.515a7.315 7.315 0 0 1 2.677 8.7l-6.023 18.73c22.755-2.676 42.833-6.689 65.587-8.7 2.008 0 5.354 3.345 5.354 5.351l-2.674 68.902h10.708l-2.008-68.9c0-2.007 2.677-6.02 5.354-5.351 22.755 2.676 42.833 6.689 65.587 8.7l-6.023-18.73a9.888 9.888 0 0 1 2.677-8.7l65.587-53.515-13.382-6.694c-6.023-2.007-4.016-5.351-2.008-13.379l10.039-36.122-38.148 8.027a5.731 5.731 0 0 1-6.693-4.014l-4.685-17.392-30.117 34.116c-4.685 5.352-13.385 5.352-10.708-7.358l12.716-68.231-17.4 8.7c-4.685 2.676-10.039 3.345-12.716-2.007z" />
            </g>
          </svg>
        </h3>
      </header>
    )).toBe(true)
  })
})