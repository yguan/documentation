<div id="menu">
    <ul>
    {{~it.sections :value:index}}
        <li><a data-scroll-nav="{{=index}}">{{=value.title}}</a></li>
    {{~}}
    </ul>
</div>

{{~it.sections :value:index}}
<div data-scroll-index="{{=index}}" data-section="{{=value.section}}" class="section-container"></div>
{{~}}



