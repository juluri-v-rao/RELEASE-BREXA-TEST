// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//the menu names written here is hardcoded and should not be used for actual purpose
//no business logic is to be written in javascript files.
const menus = {

    "custom": [
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", ""
    ],

    "daily-input": [
        "受注オーダー入力",
        "配車入力（車輌）",
        "配車入力（運転手）",
        "運転日報入力",
        "経費伝票入力",
        "有料代（経）入力",
        "仕入伝票入力",
        "入金伝票入力",
        "傭車支払伝票入力",
        "仕入先支払伝票入力",
        "",
        "",
        "",
        ""
    ],

    "daily-print": [
        "運転日報一覧表",
        "経費伝票一覧表",
        "有料代（経）一覧表",
        "仕入伝票一覧表",
        "入金伝票一覧表",
        "傭車支払伝票一覧表",
        "仕入先支払伝票一覧表",
        "日計表",
        "輸送依頼書",
        "作業指示書",
        "配車報告書",
        "",
        "",
        ""
    ],

    "daily-view": [
        "受注オーダー照会",
        "運転日報照会",
        "経費伝票照会",
        "有料代（経）照会",
        "仕入伝票照会",
        "入金伝票照会",
        "傭車支払伝票照会",
        "仕入先支払伝票照会",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    "daily-other": [
        "点呼記録表",
        "ＥＴＣデータ取込",
        "デジタコデータ取込（富士通 ITP Web 手動）",
        "デジタコデータ取込（いすゞ みまもりくん）",
        "デジタコデータ取込（矢崎 ESTRA-Web2）",
        "デジタコデータ取込（NPシステム 地球号）",
        "デジタコデータ取込（富士通 上位連携）",
        "運転日報印刷",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    "billing": [
        "未定運賃照会",
        "請求一覧表",
        "請求書発行",
        "回収予定表",
        "請求締切処理",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    "payment": [
        "傭車支払一覧表",
        "傭車支払元帳",
        "傭車支払明細表",
        "傭車支払予定表",
        "",
        "",
        "",
        "仕入先支払一覧表",
        "仕入先支払元帳",
        "仕入先支払明細表",
        "仕入先支払予定表",
        "支払締切処理",
        "",
        ""
    ],

    "vehicle": [
        "車輌別元帳",
        "車輌集計表",
        "車輌経費表",
        "車輌損益一覧表",
        "車輌運行効率表",
        "輸送実績報告書",
        "品目別輸送実績表",
        "車輌別燃費集計表",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    "driver": [
        "運転手別元帳",
        "運転手集計表",
        "運転手経費表",
        "運転手損益一覧表",
        "運転手運行効率表",
        "運転手運行手当表",
        "運転手時間集計表",
        "運転手経費支給表",
        "運転手管理台帳",
        "",
        "",
        "勤怠入力",
        "勤怠明細表",
        ""
    ],

    "consignor": [
        "荷主元帳",
        "荷主管理表",
        "荷主推移表",
        "",
        "傭車元帳",
        "傭車管理表",
        "傭車推移表",
        "仕入先元帳",
        "仕入先管理表",
        "仕入先推移表",
        "",
        "部門別集計表",
        "固定経費計上処理",
        "月次締切処理"
    ],

    "analysis": [
        "月別推移表",
        "３ヵ年月別推移表",
        "３ヵ年対比表",
        "ＡＢＣ分析",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    "master-basic": [
        "荷主マスタ",
        "車輌マスタ",
        "運転手マスタ",
        "品名マスタ",
        "発着地マスタ",
        "経費マスタ",
        "傭車マスタ",
        "仕入先マスタ",
        "エリアマスタ",
        "品名区分マスタ",
        "単位マスタ",
        "部門マスタ",
        "ルートマスタ",
        "管理マスタ"
    ],

    "master-functional": [
        "発着地運賃マスタ",
        "エリア運賃マスタ",
        "路線マスタ",
        "インターマスタ",
        "入金区分マスタ",
        "支払区分マスタ",
        "経費区分マスタ",
        "有料区分マスタ",
        "輸送実績区分マスタ",
        "有料ルート（経）マスタ",
        "荷主テンプレートマスタ",
        "出勤区分マスタ",
        "銀行マスタ",
        "所属マスタ"
    ],

    "master-functional2": [
        "点呼執行者マスタ",
        "指示伝達事項マスタ",
        "利用者マスタ",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    "ad-hoc": [
        "データ変換処理",
        "郵便番号データ取込",
        "バックアップ処理",
        "データ復旧処理",
        "カスタムメニュー設定",
        "使用制限設定",
        "データ一括削除処理",
        "給与データ作成",
        "財務データ作成",
        "給与データ出力設定",
        "財務データ出力設定",
        "クラウドバックアップ処理",
        "クラウドデータ復旧処理",
        "リモートメンテナンス"
    ]
};

//important part(Menu loading) -- this function loads the hardcoded data into the button controls for selected menu category
function loadMenu(category) {

    const items = menus[category] || [];

    for (let i = 1; i <= 14; i++) {

        const button =
            document.getElementById(`menu${i}`); //here menu is fetched by id given for the button controls in the html.

        if (!button)
            continue;

        button.textContent =
            items[i - 1] || "";
    }
}

//the selectCategory function removes old selection remove(active) and adds new selected category as add(active) and --
// -- goes to menu loading for that selected category
function selectCategory(button) {

    document
        .querySelectorAll(".menu-category")
        .forEach(x =>
            x.classList.remove("active"));

    button.classList.add("active");

    //loading a set of menu for selected category
    loadMenu(
        button.dataset.category
    );
}

//event loop for each button
document.addEventListener(
    "DOMContentLoaded",
    function () {

        document
            .querySelectorAll(".menu-category")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function () {

                        //if a category is selected then this function is called
                        selectCategory(this);

                    });

            });

        loadMenu("custom");

    });
