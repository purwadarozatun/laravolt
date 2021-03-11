<div class="ui accordion sidebar__accordion m-b-1" data-role="sidebar-accordion">
    @foreach($items as $item)
        @if($item->hasChildren())
            <div class="title {{ \Laravolt\Platform\Services\Menu::setActiveParent($item->children(), $item->isActive) }}">
                <x-laravolt::icon :name="$item->data('icon')" class="left" />
                <span>{{ $item->title }}</span>
                <i class="angle down icon"></i>
            </div>
            <div class="content {{ \Laravolt\Platform\Services\Menu::setActiveParent($item->children(), $item->isActive) }} ">
                @if($item->hasChildren())
                    <div class="ui list">
                        @foreach($item->children() as $child)
                            <a href="{{ $child->url() }}" data-parent="{{ $child->parent()->title }}"
                               class="item {{ ($child->isActive)?'selected':'' }} ">{{ $child->title }}</a>
                        @endforeach
                    </div>
                @endif
            </div>
        @else
            <a class="title empty {{ \Laravolt\Platform\Services\Menu::setActiveParent($item->children(), $item->isActive) }}"
               href="{{ $item->url() }}"
               data-parent="{{ $item->parent()->title }}">
                <x-laravolt::icon :name="$item->data('icon')" class="left" />
                <span>{{ $item->title }}</span>
            </a>
            <div class="content"></div>
        @endif

    @endforeach
</div>
