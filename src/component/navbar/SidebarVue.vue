<template>
  <nav class="fixed-top" :class="{'bg-top': !show , 'bg-not-top': show}" style="box-shadow: 0 2px 2px 0 transparent;">
    <div class="row justify-content-center vertical-end mx-auto" style="padding: 14px 0; width: 1248px;">
      <span class="col-2 icon icon-logo">
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Logo" role="img" width="127" viewBox="0 0 127 74" class="" aria-hidden="true" data-acsb-hidden="true">
      <title>Logo</title>
      <desc>Logo Icon</desc>
      <path d="M123.698 73.153h2.524v.504h-3.075v-5.409h.551v4.905zM2.87 68.248l-2.355 5.41h.642l.597-1.422H4.52l.597 1.421h.642l-2.355-5.409h-.536zm.268.642l1.17 2.842H1.959l1.178-2.842zm9.215 2.75c0 .224-.027.462-.08.714a1.923 1.923 0 0 1-.302.7c-.149.214-.35.39-.608.53s-.588.21-.99.21c-.408 0-.74-.07-.995-.21a1.726 1.726 0 0 1-.604-.53 1.933 1.933 0 0 1-.302-.7 3.486 3.486 0 0 1-.08-.714V68.25h.55v3.33c0 .26.026.483.076.668.052.187.12.343.203.47.084.128.178.228.283.302a1.359 1.359 0 0 0 .616.252c.097.013.18.019.253.019.065 0 .148-.006.248-.019a1.338 1.338 0 0 0 .62-.252c.103-.074.198-.174.282-.302.084-.127.152-.283.203-.47.051-.185.076-.408.076-.668v-3.33h.55v3.391zm5.927-2.498c-.24-.351-.589-.526-1.048-.526-.143 0-.283.018-.42.057a1.162 1.162 0 0 0-.372.175.887.887 0 0 0-.264.306.929.929 0 0 0-.099.44c0 .243.069.434.206.568.139.135.31.246.513.332.204.087.427.165.67.233.241.07.464.16.668.275.204.115.375.267.513.454.137.19.206.447.206.773 0 .244-.052.464-.157.66a1.52 1.52 0 0 1-.412.493 1.917 1.917 0 0 1-.574.305 1.98 1.98 0 0 1-.639.108c-.331 0-.646-.063-.944-.187a1.798 1.798 0 0 1-.76-.616l.504-.36c.117.2.279.36.488.479.208.12.454.179.739.179.137 0 .274-.022.411-.065.138-.043.26-.106.37-.19.11-.084.2-.188.271-.31a.82.82 0 0 0 .107-.42.862.862 0 0 0-.12-.47 1.032 1.032 0 0 0-.312-.313 2.054 2.054 0 0 0-.444-.21 37.987 37.987 0 0 0-.513-.169 5.594 5.594 0 0 1-.512-.19 1.782 1.782 0 0 1-.443-.271 1.212 1.212 0 0 1-.314-.413 1.445 1.445 0 0 1-.118-.623c0-.26.05-.486.15-.68.099-.193.23-.353.396-.48.166-.128.353-.222.562-.283.21-.061.423-.092.643-.092a2.3 2.3 0 0 1 .834.145c.25.097.482.267.695.512l-.481.374zm5.414 4.515h-.55v-4.904H21.33v-.505h4.176v.505h-1.813v4.904zm5.192-3.017h.98c.245 0 .452-.026.623-.077.17-.05.307-.118.409-.202a.74.74 0 0 0 .221-.298.987.987 0 0 0 0-.734.767.767 0 0 0-.221-.3 1.067 1.067 0 0 0-.41-.203 2.295 2.295 0 0 0-.623-.073h-.979v1.887zm0 3.017h-.55v-5.409h1.667c.55 0 .985.12 1.304.36.319.24.478.6.478 1.084 0 .377-.119.695-.356.951-.237.257-.58.407-1.028.448l1.56 2.566h-.673l-1.484-2.513h-.918v2.513zm6.684-1.925h2.348l-1.17-2.841-1.178 2.841zm-.803 1.925h-.642l2.355-5.409h.535l2.356 5.409h-.642l-.597-1.421h-2.768l-.597 1.42zm7.877-.504h2.524v.504h-3.075v-5.409h.551v4.905zm5.261.504v-5.408h.551v5.408h-.55zm4.719-1.925h2.348l-1.17-2.841-1.178 2.841zm-.803 1.925h-.642l2.355-5.409h.535l2.356 5.409h-.642l-.597-1.421h-2.768l-.597 1.42zm11.242-.825h.015v-4.584h.55v5.409h-.688l-3.227-4.629h-.015v4.629h-.55v-5.409h.688l3.227 4.584zm7.96-1.88c0-.188.036-.364.108-.526a1.371 1.371 0 0 1 .718-.718c.163-.072.34-.108.528-.108.19 0 .364.036.528.108a1.382 1.382 0 0 1 .718.718c.072.162.108.338.108.527 0 .188-.036.364-.108.527a1.367 1.367 0 0 1-1.246.825c-.189 0-.365-.036-.528-.107a1.38 1.38 0 0 1-.718-.718 1.291 1.291 0 0 1-.108-.527zm14.018 1.88h.015v-4.584h.55v5.409h-.687l-3.227-4.629h-.016v4.629h-.55v-5.409h.688l3.227 4.584zm4.734-1.1h2.348l-1.17-2.841-1.178 2.841zm-.803 1.925h-.642l2.355-5.409h.536l2.355 5.409h-.642l-.597-1.421h-2.768l-.597 1.42zm8.542 0h-.55v-4.904H95.15v-.505h4.176v.505h-1.813v4.904zm8.512-2.017c0 .224-.027.462-.08.714a1.913 1.913 0 0 1-.303.7c-.147.214-.35.39-.608.53-.257.14-.587.21-.99.21-.408 0-.74-.07-.994-.21a1.718 1.718 0 0 1-.604-.53 1.924 1.924 0 0 1-.303-.7 3.445 3.445 0 0 1-.08-.714V68.25h.551v3.33c0 .26.025.483.077.668.05.187.118.343.202.47.084.128.179.228.283.302a1.35 1.35 0 0 0 .615.252c.097.013.182.019.253.019.066 0 .149-.006.248-.019a1.342 1.342 0 0 0 .62-.252c.105-.074.199-.174.283-.302.084-.127.152-.283.203-.47.05-.185.076-.408.076-.668v-3.33h.55v3.391zm3.915-1h.98a2.2 2.2 0 0 0 .622-.077c.17-.05.307-.118.41-.202a.74.74 0 0 0 .221-.298.987.987 0 0 0 .07-.37.967.967 0 0 0-.07-.364.767.767 0 0 0-.221-.3 1.076 1.076 0 0 0-.41-.203 2.3 2.3 0 0 0-.623-.073h-.979v1.887zm0 3.017h-.55v-5.409h1.666c.551 0 .986.12 1.304.36.319.24.479.6.479 1.084 0 .377-.119.695-.356.951-.237.257-.58.407-1.029.448l1.56 2.566h-.673l-1.483-2.513h-.918v2.513zm6.684-1.925h2.348l-1.17-2.841-1.178 2.841zm-.803 1.925h-.642l2.355-5.409h.535l2.356 5.409h-.642l-.597-1.421h-2.768l-.597 1.42zM57.72 35.858c.608 1.062 1.403 2.02 2.16 2.903.65.76 1.37 1.614 2.15 2.288a414.437 414.437 0 0 0-.1 3.57c-2.505-2.067-3.729-5.24-4.21-8.76m-.254-3.706c.965 1.347 2.017 2.605 3.103 3.816a60.19 60.19 0 0 0 1.581 1.695c-.036.923-.067 1.798-.095 2.619-.634-.606-1.288-1.19-1.876-1.86-.9-1.023-1.663-2.197-2.54-3.237a30.873 30.873 0 0 1-.173-3.033m.152-3.922c1.46 1.862 3.003 3.854 4.705 5.43a435.926 435.926 0 0 0-.145 3.299c-.121-.121-.243-.24-.363-.363a60.692 60.692 0 0 1-1.672-1.775c-.91-1.005-1.785-2.053-2.674-3.084.002-1.172.057-2.348.15-3.507m.263-2.56c.761.968 1.54 1.915 2.35 2.828.712.803 1.433 1.702 2.23 2.428-.033.606-.064 1.205-.093 1.795-1.536-1.704-3.195-3.292-4.704-5.028.06-.685.135-1.359.217-2.023m.374-2.66c.175-1.092.383-2.173.616-3.244.699.902 1.447 1.756 2.193 2.6.572.649 1.159 1.432 1.814 2.02-.144 1.939-.267 3.88-.374 5.768-.7-.744-1.472-1.425-2.157-2.16-.82-.88-1.623-1.783-2.422-2.692.1-.787.212-1.554.33-2.291m1.366-6.284c.63.773 1.278 1.529 1.924 2.282.53.617 1.042 1.314 1.614 1.895-.077.883-.15 1.773-.219 2.666-.55-.595-1.177-1.133-1.705-1.698-.768-.82-1.51-1.675-2.277-2.495.2-.892.423-1.774.663-2.65m1.311-4.172c.897 1.025 1.81 2.077 2.773 3.01a171.034 171.034 0 0 0-.473 4.533c-.482-.559-1.02-1.073-1.496-1.6a99.05 99.05 0 0 0-2.004-2.17c.36-1.276.76-2.534 1.2-3.773m.933-2.432l1.24 1.412c.324.368.638.766.984 1.11-.1.687-.195 1.397-.286 2.125-.87-.915-1.81-1.768-2.725-2.612.25-.685.514-1.362.787-2.035m1.32-2.998c.475.686.944 1.4 1.455 2.048-.141.865-.232 1.435-.232 1.435v.002c-.078.457-.153.929-.227 1.412-.282-.313-.585-.605-.87-.903l-1.298-1.36c.368-.892.764-1.767 1.172-2.634m1.046-2.1c.157.298.324.588.513.861.112.162.237.328.367.49-.135.78-.261 1.531-.369 2.181-.454-.595-.944-1.163-1.41-1.735.29-.606.591-1.204.899-1.797m1.696-3.039c-.211 1-.464 2.375-.703 3.737-.04-.047-.082-.09-.119-.139a7.553 7.553 0 0 1-.635-1.018c.464-.875.95-1.735 1.457-2.58m1.384 4.25c-.342.256-.644.617-.962.908-.14.128-.285.248-.43.37l.074-.638a.249.249 0 0 0 .02-.182c.2-1.692.391-3.219.507-4.129.258 1.22.523 2.444.79 3.671m.548 2.512c-.842.463-1.625 1.31-2.31 2.155.089-.87.189-1.793.293-2.708.29-.21.57-.449.84-.678.252-.216.525-.428.762-.677l.415 1.908m.667 3.143c-.063-.023-.136-.013-.21.048a36.098 36.098 0 0 0-3.067 2.86l.017-.422c.03-.705.11-1.688.217-2.797.345-.392.698-.774 1.073-1.127.452-.425.964-.766 1.416-1.186.188.872.372 1.748.554 2.624m.12.586c.23 1.12.449 2.244.655 3.368-.015.005-.03.006-.044.015-1.492.868-2.897 2.271-4.183 3.599.05-1.472.101-2.85.152-4.113 1.118-.946 2.222-1.904 3.369-2.808.022-.018.035-.04.051-.061m1.482 8.554c-1.857 1.443-3.612 3.272-5.243 5.139.048-2.135.106-4.172.167-6.068 1.43-1.259 2.99-2.377 4.342-3.736.279 1.553.527 3.108.734 4.665m.288 2.493h-.001c-1.91 1.623-3.8 3.336-5.58 5.168.01-.59.022-1.176.033-1.754 1.774-1.748 3.603-3.423 5.344-5.205.074.597.143 1.194.204 1.79m.17 1.924c.082 1.149.113 2.313.083 3.475-.02.011-.04.018-.06.035a221.623 221.623 0 0 0-5.843 5.552c.01-1.754.03-3.485.058-5.174 1.87-1.722 3.731-3.44 5.659-5.076.036.397.075.792.104 1.188m-.308 7.712c-1.917 1.334-3.756 2.995-5.519 4.637-.002-.92-.001-1.838.003-2.75a209.43 209.43 0 0 0 5.87-5.223 30.273 30.273 0 0 1-.354 3.336m-5.452 10.933a343.61 343.61 0 0 1-.065-5.624c1.78-1.427 3.609-2.822 5.337-4.333-.79 3.912-2.445 7.473-5.272 9.957m20.8 15.148c-.047.005-.135.068-.26.132v.002l-.012.003a1.587 1.587 0 0 1-.088.042c-.19.097-.694.297-2.62-.078a13.313 13.313 0 0 1-.667-.14l-.198-.044-.078-.02-.01-.003c-.16-.04-.3-.077-.412-.115-2.195-.62-5.494-2.02-9.943-5.227-.532-.391-1.352-.958-2.22-1.742l.036-.026-.011.002s2.907-2.763 8.082-5.832l.049-.027.072-.05c.58-.36 1.677-1.06 2.56-1.737a4.873 4.873 0 0 0 .694-.57c.004-.004.004-.007.008-.01.013-.013.023-.025.034-.038a.774.774 0 0 0 .125-.148c.347-.442.294-.748.175-.94h.002l-.008-.009a.739.739 0 0 0-.212-.215 2.842 2.842 0 0 0-.072-.067c-.01-.01-.016-.018-.03-.03-.293-.267-.744-.615-1.201-.738-.015-.006-.03-.01-.044-.013-.05-.012-.098-.017-.146-.022a.988.988 0 0 0-.221-.007c-.01 0-.02-.003-.03-.001-.006 0-.01.003-.017.004-.266.03-.621.168-1.055.552l-.001.001c-.007.006-.787.788-1.94 1.833l-5.58 4.383c-1.858 1.432-3.469 2.087-3.469 2.087-1.239.636-1.668.112-1.668.112-.035-.433-.07-.926-.102-1.452l-.187-3.092c-.027-.292-.052-.583-.077-.875 4.663-3.601 6.59-10.428 6.574-16.819-.01-4.497-.84-8.92-1.7-13.272C68.784 10.123 67.773 5.222 66.8.31a.434.434 0 0 0-.085-.186.179.179 0 0 0-.157-.11c-.145-.043-.316.018-.42.175-2.252 3.46-4.132 7.236-5.61 11.217l-.295.824a60.963 60.963 0 0 0-2.973 12.328l-.038.302c-.057.446-.114.891-.161 1.338-.698 6.598-.693 15.898 4.847 19.299-.02.917-.027 1.435-.027 1.435l.053 2.357c-.011.157-.004.505.024 1.1.023.906.036 1.774.037 2.593-.055 3.72-.525 7.24-.655 8.152-.006.035-.011.07-.017.097a.734.734 0 0 0-.017.134c-.143.992.225.94.225.94.036 0 .19-.036.415-.096l3.425-.8s.211-.024.219-.371h.001v-.015c0-.03-.003-.064-.007-.098l-.025-.396c-.03-.636-.105-1.693-.174-2.603v-.005l-.025-.316c-.092-1.32-.23-2.75-.23-2.877 0-.274.124-.415.386-.415.102 0 .548.23 1.346.674 1.329.88 4.057 2.615 4.791 3.054.735.445 4.807 2.814 6.103 3.25.918.317 1.81.68 2.634.85l-.003.002c.026.006.048.008.073.013l.116.022c1.91.396 3.109.008 3.853-.524.036-.024.077-.056.117-.087.027-.02.057-.04.082-.063l.005-.002.016-.016a3.28 3.28 0 0 0 .277-.268c.804-.848.881-1.754.881-1.754 0-.098-.072-.243-.182-.223m37.358-25.423c1.28 0 2.268.982 2.268 2.266 0 1.312-.988 2.3-2.268 2.3-1.29 0-2.279-.988-2.279-2.3 0-1.284.989-2.266 2.279-2.266m0 4.96c1.51 0 2.766-1.152 2.766-2.694 0-1.514-1.256-2.666-2.766-2.666-1.517 0-2.78 1.152-2.78 2.666 0 1.542 1.263 2.693 2.78 2.693m-.569-3.855h.657c.34 0 .712.062.712.481 0 .49-.41.516-.846.516h-.523v-.997zm0 1.395v1.343h-.503v-3.129h1.241c.77 0 1.135.288 1.135.894 0 .568-.374.803-.852.856l.92 1.38h-.534l-.874-1.344h-.533zm-27.514 6.288c.006.025.008.041.012.062.024.099.027.171.024.205l-.001.027-.323 1.387c-.163.784-.33 1.704-.348 2.253-.013.426-.096 3.122-.146 3.944-.309 5.11.304 7.058.41 7.643v-.001s.374 1.093.128 1.456c-.005.008-.014.011-.02.019-.1.232-.279.412-.503.586-.099.082-2.349 1.47-2.757 1.643l-.09.041-.043.018-.066.03c-.015.007-.03.012-.047.018l-.013.005c-.149.055-.284.07-.284.07-.025.003-.042-.003-.067-.002-.037.002-.072.01-.11.008v.001s-.045-.002-.108-.013l-.041-.01a.699.699 0 0 1-.116-.04c-.039-.017-.073-.03-.101-.048-.003 0-.006 0-.01-.003-.007-.004-.01-.01-.016-.013-.06-.043-.101-.081-.101-.081a.326.326 0 0 1-.09-.16l-.001-.001v-.004c-.004-.016-.003-.033-.006-.05-.005-.034-.012-.066-.012-.09-.001-.116.022-.214.022-.214.014-.077.031-.133.031-.133l.41-1.72c.533-2.923.62-7.207-.023-11.823-.052-.376-.142-1.75-.24-2.47-.028-.227-.205-.24-.205-.24-.243-.037-.34-.118-.36-.215h-.003l.002-.008c-.043-.255.453-.617.453-.617l.003.001c.124-.103.265-.212.44-.33 1.328-.844 2.486-1.397 3.455-1.663 0 0 .203-.03.38.031a4.917 4.917 0 0 0 .066.03.804.804 0 0 1 .317.274v.001a.871.871 0 0 1 .092.184c.002.004.005.006.006.012zm1.147-11.453c.376.227.503.479.503.811a.295.295 0 0 1-.03.117h.003c0 .003-.006.013-.007.015l-.006.012c-.055.11-.275.58-.601.947-.006.007-.012.008-.018.014-.33.409-.735.767-1.17 1.08l-.014.012c-2.978 2.4-4.359 1.66-4.359 1.66l-.004-.001c-.17-.13-.149-.403-.149-.403h.002c-.002-.551.705-1.762 4.296-4.376.294-.18.626-.288.827-.288.164 0 .348.144.727.4zM17.722 49.726c1.434.43 2.79 1.254 3.317 1.763 0 0 1.586 1.564 1.11 3.867l-.005.024c-.023.107-.044.213-.077.324l-.003-.016c-.693 2.507-3.608 4.464-4.095 4.68-6.24 3.48-12.593 1.716-12.593 1.716h.002c-.694-.147-1.042-.33-1.33-.435-.71-.257-2.878-1.564-3.158-1.828C.293 59.239 0 58.75 0 58.2c0-.114.221-.383.662-.666 0 0 1.982-1.327 2.096-1.327.081 0 .154.03.217.077.33.269.553.505.652.778l.002-.003s.68 1.765 1.645 2.493c.149.106.367.24.626.384.046.022.648.313 1.685.518a15.253 15.253 0 0 0 3.72.23l.15-.011a17.605 17.605 0 0 0 .84-.08c.753-.093 1.482-.243 2.095-.486.864-.341 1.641-.743 2.018-1.077.991-.88 1.672-2.617 1.672-3.743a2.38 2.38 0 0 0-.142-.749l-.015-.029c-.387-.869-1.649-1.374-2.245-1.57l-.137-.056-.14-.027-.042-.012-.001.003c-.517-.109-1.036-.204-1.453-.233-1.051-.075-3.807-.037-5.11-.014-.095.002-.197.008-.287.01l-.055.002.004-.002c-.123.002-.253.005-.365.004-1.54-.01-3.837-.716-4.09-.803-1.545-.446-2.323-1.262-2.323-2.278 0-.44.106-.881.314-1.322l-.002.001s.076-.155.239-.404c.14-.228.308-.455.506-.68l.115-.14c.02-.022.035-.044.055-.066.013-.015.038-.036.053-.052.933-1.047 2.649-2.484 5.542-3.493l.02-.009c1.861-.774 4.746-1.07 4.746-1.07l.023.02h.005l-.028-.02c5.477-.336 6.58.48 6.805.832.011.017.02.033.028.049.03.064.032.106.032.106 0 .163-.067.264-.268.433-.063.032-.547.304-1.468.77-.966.478-1.483.732-1.603.732-.202.062-.987-.066-1.036-.072l.049.003c-.804-.106-1.44-.308-1.965-.393-.104-.018-.322-.056-.608-.098-.366-.05-2.381-.3-4.081.187-1.339.415-3.258 1.22-3.756 2.524-.04.12-.11.384-.023.616.172.388.77 1.122 2.901 1.546.222.06 2.06.208 3.895.115.768-.077 1.72-.175 1.72-.175.888-.096 2.54-.139 3.833.252zm34.865 9.908l.012.005a.598.598 0 0 0 .078.034c-.041.088-.118.18-.206.27a4.049 4.049 0 0 1-3.652 1.534l-.03-.004a.991.991 0 0 1-.033-.006l.006-.002a.802.802 0 0 1-.413-.25c-.259-.283-.388-.738-.388-1.188 0-.115.002-.22.008-.345-.004-.457-.379-.527-.52-.537-.154-.005-.36.037-.599.115-.284.128-.531.302-.531.302h-.001c-.823.617-3.605 2.402-8.37 2.474l.011-.004c-.338.007-.542 0-.542 0h.005c-.143-.002-.29-.004-.45-.01-2.72-.016-4.37-.498-5.287-.914a3.192 3.192 0 0 1-.124-.054l-.015-.008c-.053-.025-.11-.05-.153-.076l-.03-.017c-.458-.243-.653-.432-.653-.432h.007c-.301-.223-.554-.443-.681-.6a3.008 3.008 0 0 1-.632-1.805l-.185-8.367c-.009-.7-.127-3.746-.144-4.213-.02-.565-.382-1.325-.45-1.45-.068-.124.432-.308.432-.308l.04-.014c.124-.048.261-.097.43-.15l.2-.066 2.35-.808s.275-.116.587-.106l-.002-.002h.03l.005.001c.018 0 .042.004.073.008a.674.674 0 0 1 .35.137l.009.004.037.05c.019.017.034.041.051.063.014.02.034.03.046.054l-.003-.002a.886.886 0 0 1 .095.183l.018.036.004.006v.002c.092.183.175.4.184.6.026.403-.374 1.517-.475 2.425-.106.912-.24 1.68-.336 2.865-.125 1.639.024 7.667.185 8.817.023.166.046.307.07.441.027.124.133.528.404.881.103.114.227.239.402.373.001 0 .002 0 .003.002.492.376 1.293.785 2.565.985.188.03.379.053.57.072.014 0 .026.002.04.004.09.008.183.013.276.018 5.725.253 8.512-2.424 8.512-2.424.268-.302.54-.64.784-.96.03-.045.079-.105.124-.162l.085-.112c.435-.528.713-1.07.9-1.559.132-.423.365-1.568.205-4.106-.199-2.622-.427-4.25-.427-4.25-.04-.41-.163-1.362-.238-2.061v-.001c-.016-.15-.028-.284-.038-.403-.1-.587-.367-1.364-.367-1.364-.068-.124.433-.308.433-.308l.04-.014c.123-.048.26-.097.429-.15l.2-.066 2.35-.808s.275-.116.588-.106l-.003-.002h.03l.005.001a.825.825 0 0 1 .096.01.676.676 0 0 1 .327.135l.01.004.037.05c.018.017.033.041.05.062.014.021.034.031.046.055l-.002-.002a.886.886 0 0 1 .094.183l.019.036.003.006v.002c.092.183.175.4.184.6.004.057-.003.132-.014.215l-.35 2.7c-.098 1-.207 2.122-.245 2.603a94.645 94.645 0 0 0-.156 2.736c0 .135.007 2.076.056 3.53 0 .361.013.693.034 1.003.006.079.014.148.02.224a11.237 11.237 0 0 0 .112.903l.03.16c.049.263.104.5.165.713.013.044.024.093.037.135.39 1.271.944 1.662 1.157 1.77zm74.146.52c.208.338-.53.611-.53.611s-.68.227-1.483.491c-.544.188-1.13.384-1.517.495l-.004.002h-.002a4.13 4.13 0 0 1-.257.067h-.006a.8.8 0 0 1-.135.023c-.013 0-.027-.004-.04-.006a.915.915 0 0 1-.375-.07l-.032-.014c-.05-.023-.085-.043-.085-.043l.018-.003a.821.821 0 0 1-.358-.48c-.009-.021-.01-.042-.015-.063l-.011-.063c.008-.122.061-.35.122-.596.006-.022.224-.816.383-1.544.06-.232.107-.428.118-.525.012-.1.022-.219.033-.335l.008-.064v-.005c.23-2.677.048-9.149-.971-11.187-.466-.922-1.074-1.417-2.876-2-1.148-.364-2.901-.365-4.58-.22-3.023.266-4.81 1.457-5.633 2.173a9.13 9.13 0 0 0-.55.546c-.246.296-.684 1.006-.703 2.31-.06 1.916.024 4.47.458 8.138.066.577.24 1.83.481 2.363.19.337-.48.61-.48.61s-.62.227-1.349.491a29.89 29.89 0 0 1-1.383.497h-.002c-.092.029-.17.051-.233.067h-.006a.662.662 0 0 1-.123.023c-.011 0-.024-.004-.036-.006a.77.77 0 0 1-.341-.07l-.029-.014c-.045-.023-.078-.043-.078-.043l.017-.003a.819.819 0 0 1-.325-.48c-.008-.021-.01-.042-.014-.063-.007-.037-.01-.063-.01-.063.018-.293.266-1.179.302-1.529.116-1.136.143-6.507-.09-10.506-.172-1.031-.437-2.57-.489-2.874-.084-.495-.444-1.128-.509-1.23-.003-.005.004-.011.002-.016a.37.37 0 0 0-.01-.012c.003-.013.015-.03.02-.043.006-.013.008-.023.018-.037.247-.595 1.562-1.617 3.36-2.176 0 0 .859-.29 1.05.305.013.02.029.082.043.196v.002c.027.202.05.564.05 1.135 0 .42.001.807.121 1.231 0 0 2.289-2.337 7.158-2.888l.006.003.068-.007c.119-.014.235-.03.371-.045 6.226-.678 8.401.835 8.401.835l-.01.004c.77.4 1.371.954 1.677 1.73.583 1.47.542 5.98 1.033 13.485.017.253.052.555.155.884h-.002c.063.239.132.454.209.607z" class="fill"></path>
    </svg>
  </span>
      <div class="col-7 nav-dropdown text-center pb-2">
        <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          BESTSELLERS
        </span>
            <el-dropdown-menu slot="dropdown" >
              <div class="d-flex flex-row justify-content-center">
                <div v-for="(n,index) in bestSeller" :key="index" >
                  <ProductBanner :data="n"/>
                </div>
              </div>
            </el-dropdown-menu>
          </el-dropdown>

        <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          GIFT SETS
        </span>
          <el-dropdown-menu slot="dropdown" >
            <div class="d-flex flex-row justify-content-center">
            <div>
              <strong>CATEGORY</strong>
              <div>Under $20</div>
              <div>Under $10</div>
              <div>Under $5</div>
              <div>Bundles</div>
              <div>Natural Gifts for Her</div>
              <div>Stocking Stuffers</div>
            </div>
            <div>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0081/7374/8305/products/SUKINE-GiftCard_360x.jpg?v=1599504681" style="width: 214px">
                <strong class="d-block">E_GIFT CARD</strong>
                <div>$10.00</div>
              </div>
            </div>
            <div>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0081/7374/8305/products/SUKINE-GiftCard_360x.jpg?v=1599504681" style="width: 214px">
                <strong class="d-block">E_GIFT CARD</strong>
                <div>$10.00</div>
              </div>
            </div>
              <div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0081/7374/8305/products/SUKINE-GiftCard_360x.jpg?v=1599504681" style="width: 214px">
                  <strong class="d-block">E_GIFT CARD</strong>
                  <div>$10.00</div>
                </div>
              </div>
              <div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0081/7374/8305/products/SUKINE-GiftCard_360x.jpg?v=1599504681" style="width: 214px">
                  <strong class="d-block">E_GIFT CARD</strong>
                  <div>$10.00</div>
                </div>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="me-3">
          <router-link to="/collections">
            <span class="el-dropdown-link">
          SHOP THE RANGE
        </span>
          </router-link>
          <el-dropdown-menu slot="dropdown" >
            <div class="row justify-content-center ">
            <div class="col-4 submenu-wrap">
              <div class="text-uppercase lh-1 letter-spacing-2x hover-range" :class="{'active':rangeShop.face}" @mouseover="rangeShop.face=true" >
                <span>shop the range</span>
                <div>face</div>
              </div>
              <div class="text-uppercase lh-1  letter-spacing-2x hover-range range-border" :class="{'active':rangeShop.body}" @mouseover="changeRange('body')" @mouseout="rangeShop.body=false">body</div>
              <div class="text-uppercase  lh-1 letter-spacing-2x hover-range range-border" :class="{'active':rangeShop.hair}" @mouseover="changeRange('hair')" @mouseout="rangeShop.hair=false">hair</div>
              <div class="text-uppercase lh-1 letter-spacing-2x hover-range range-border" :class="{'active':rangeShop.gifts}" @mouseover="changeRange('gift')" @mouseout="rangeShop.gifts=false">gifts</div>
              <div class="text-uppercase lh-1 letter-spacing-2x hover-range range-border" :class="{'active':rangeShop.travel}" @mouseover="changeRange('travel')" @mouseout="rangeShop.travel=false">travel sizes</div>
            </div>
              <div class="col-8 sub-option-wrap">
                <div id="MegaNav_shop-the-range_face" :class="{'d-none': !rangeShop.face}" class=" d-flex flex-row" >
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                </div>
                <div id="MegaNav_shop-the-range_body" :class="{'d-none': !rangeShop.body}" class=" d-flex flex-row" >
                  <h1>BODY</h1>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                </div>
                <div id="MegaNav_shop-the-range_hair" :class="{'d-none': !rangeShop.hair}" class=" d-flex flex-row" >
                  <h1>Hair</h1>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                </div>
                <div id="MegaNav_shop-the-range_gift" :class="{'d-none': !rangeShop.gifts}" class=" d-flex flex-row"  >
                  <h1>gift</h1>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                </div>
                <div id="MegaNav_shop-the-range_travel"  :class="{'d-none': !rangeShop.travel}" class=" d-flex flex-row" >
                  <h1>travel</h1>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                  <div>
                    <strong>CATEGORY</strong>
                    <div>Under $20</div>
                    <div>Under $10</div>
                    <div>Under $5</div>
                    <div>Bundles</div>
                    <div>Natural Gifts for Her</div>
                    <div>Stocking Stuffers</div>
                  </div>
                </div>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          LAST CHANGE
        </span>
        </el-dropdown>
        <span class="split"></span>
        <img :src="data.logo2" style="width: 140px" alt=""/>
      </div>
      <div class="col-3 nav-logo text-right pb-2">
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Search" role="img" width="16" viewBox="0 0 16 16"
             class="icon me-4">
          <title>Search</title>
          <desc>Search Icon</desc>
          <path
              d="M12.148 11.075l3.629 3.641-1.06 1.06-3.629-3.639a6.673 6.673 0 1 1 1.06-1.062zm-5.225 1.021a5.173 5.173 0 1 0 0-10.346 5.173 5.173 0 0 0 0 10.346z"
              class="fill"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="My Account" role="img" width="16" viewBox="0 0 16 18" class="icon me-4">
          <title>My Account</title>
          <desc>My Account Icon</desc>
          <path d="M15.75 18h-1.5a6.25 6.25 0 1 0-12.5 0H.25a7.75 7.75 0 0 1 15.5 0zM8 9.75a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5zm0-1.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z" class="fill"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping bag" role="img" width="16" viewBox="0 0 16 16" class="icon me-4">
          <title>Shopping bag</title>
          <desc>Shopping bag Icon</desc>
          <path d="M11.205 6.5H4.972l-.23 1.606-1.484-.212.199-1.394H1.5v7.947h13V6.5h-1.78l.2 1.394-1.485.212-.23-1.606zM12.506 5h2.652c.465 0 .842.377.842.842v9.263a.842.842 0 0 1-.842.842H.842A.842.842 0 0 1 0 15.105V5.842C0 5.377.377 5 .842 5h2.829L4.258.894A.75.75 0 0 1 5 .25h6.177a.75.75 0 0 1 .743.644L12.506 5zm-1.515 0l-.464-3.25H5.65L5.186 5h5.805z" class="fill"></path>
        </svg>
      </div>
    </div>

  </nav>
</template>
<script>

import ProductBanner from "@/component/product/productBestSeller/productBanner/ProductBanner.vue";

export default {
  components: {ProductBanner},
  data() {
    return {
      data: {
        logo2:
            "https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Navbar%2Flogo2.svg?alt=media&token=1c1ebefd-d4dc-41a7-a38c-a817170406e2",
        logo1:
            "https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Navbar%2Flogo.svg?alt=media&token=17b28b01-c373-4863-b5bf-66817eb9088d",
      },
      rangeShop : {
        face : true ,
        body : false,
        hair : false,
        gifts : false,
        travel : false
      }
      ,
      bestSeller: [
        {
          name: 'hydrating body lotion',
          type: 'signature',
          price: '$8.39',
          vote: 5,
          review: 127,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FSignature_Hydrating_Body_Lotion.jpg?alt=media&token=433d407b-8d52-4118-b0cc-77ad403d40b7',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FHydrating-Body-Lotion-before.jpg?alt=media&token=06e908b8-53c0-4007-9865-bc7ceb55152a'
          ]
        },
        {
          name: 'Hydrating Replenishing Mask Treatment',
          type: 'Hair Care',
          price: '$15.99',
          vote: 4.5,
          review: 66,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FHydrating_Replenishing_Hair_Masque.jpg?alt=media&token=0d097c0c-c0a9-4c84-b9ad-75581e9e4d4e',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2Fnew-hair-treatment-before.jpg?alt=media&token=0aa00a49-14ad-491e-bd4f-a67c4baf89c7'
          ]
        },
        {
          name: 'Hydrating Conditioner',
          type: 'Hair Care',
          price: '$18.99',
          vote: 4.5,
          review: 137,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FMasterbrand_Hydrating_Conditioner.jpg?alt=media&token=881194df-5362-40db-8953-a721f35d0ed0',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FNO_Lists_for_Site-SIG-before.jpg?alt=media&token=3ecb32a1-0b38-419d-a2ee-78e62fa6a6d0'
          ]
        },
        {
          name: 'Natural Balance Conditioner',
          type: 'Hair Care',
          price: '$18.99',
          vote: 4.5,
          review: 77,
          img: ['https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2FNatural_Balance_Conditioner.jpg?alt=media&token=2ba4bde0-4b41-4702-a0b9-ffcbcc7a2183',
            'https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Section1%2Fsukinskincare.jpg?alt=media&token=3f4aa237-bfc0-4d10-98a1-a4d392a0e3bf'
          ]
        },


      ],
      show:false
    };
  },
  props: {},
  computed: {

  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    changeRange(range){
      if(range == 'body')
        this.rangeShop.body = true
      if(range == 'hair')
        this.rangeShop.hair = true
      if(range == 'gift')
        this.rangeShop.gifts = true
      if(range == 'travel')
        this.rangeShop.travel = true
      this.rangeShop.face = false;

    },
    trasitionNavBar(){
      if(window.scrollY >100){
        this.show = true
      }else {
        this.show = false
      }
    },
    setUp(){
      window.addEventListener("scroll",this.trasitionNavBar)
    }
  },
  mounted() {
    this.setUp();
  }
};
</script>
<style></style>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

.navbar {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-weight: 600;
}

.icon :hover {
  fill: #54585a;
}

.nav-logo svg .fill {
  fill: #54585a;
}

.split {
  padding: 8px;
  border: 1px solid #979797;
  border-right: none;
  border-top: none;
  border-bottom: none;
}
.hover-range:hover {
  background-color: #f4f3f0;
}
.range-border{
  border-top: 1px solid #d4d0c4;
  padding: 23px 22.4px;
}
.active{
  background-color: #f4f3f0;
}
.bg-not-top{
  background-color: white;
}
.bg-top{
  background-color: #f4f3f0cc;
}
</style>
