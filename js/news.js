const news =
    [
        {
            "class": "success",
            "status": "open",
            "category": "оновлення",
            "date": "29.05.2019",
            "headline": "Нові функції моніторинга",
            "content": "Uniquely fashion B2B content for one-to-one web-readiness. Continually  embrace"
        },
        {
            "class": "success",
            "status": "no-open",
            "category": "оновлення",
            "date": "28.05.2019",
            "headline": "Оновленна вкладка судових рішень",
            "content": "Synergistically aggregate inexpensive value after enterprise e-tailers. Assertively mesh cooperative resources before revolutionary bandwidth. Globally expedite team."
        },
        {
            "class": "danger",
            "status": "no-open",
            "category": "Гаряча новина",
            "date": "28.05.2019",
            "headline": "Сьогодні YouControl провів зустріч з представн",
            "content": "Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional."
        },
        {
            "class": "warning",
            "status": "open",
            "category": "Вебінар",
            "date": "21.05.2019",
            "headline": "Нові функції моніторинга",
            "content": "Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace."
        },
        {
            "class": "success",
            "status": "no-open",
            "category": "оновлення",
            "date": "20.05.2019",
            "headline": "Нові функції моніторинга",
            "content": "Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace."
        },
        {
            "class": "inform",
            "status": "open",
            "category": "Зустріч",
            "date": "15.05.2019",
            "headline": "Сьогодні YouControl провів зустріч з представн...",
            "content": "Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional."
        },
    ];

function success(data) {
    document.querySelector("#sidebar-right-content").innerHTML = data.map((e, key) =>
        `<div class="news-wrap ${e.status}" id="new-${key}">
            <div class="news-notification">
                <span class="notification-category ${e.class}">${e.category}</span>
                <p><span class="mr-1">Сьогодні</span>${e.date}</p>
            </div>
            <div class="news-content mt-3">
                <h4>${e.headline}</h4>
                <p>${e.content}</p>
            </div>
        </div>`).join("");
}

success(news);