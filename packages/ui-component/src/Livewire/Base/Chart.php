<?php

namespace Laravolt\UiComponent\Livewire\Base;

use Illuminate\Support\Str;
use Livewire\Component;

abstract class Chart extends Component
{
    public const BAR = 'bar';
    public const LINE = 'line';
    public const AREA = 'area';
    public const DONUT = 'donut';

    public string $key;

    protected string $type = 'line';

    protected string $title = '';

    protected array $series = [];

    abstract protected function series(): array;

    protected function labels(): array
    {
        return array_keys(collect($this->series)->last());
    }

    public function title(): string
    {
        return $this->title;
    }

    public function mount(): void
    {
        $this->key = 'chart-'.Str::uuid();
        if (trim($this->title) === '') {
            $this->title = (new \ReflectionClass($this))->getShortName();
        }
        $this->series = $this->series();
    }

    public function options(): array
    {
        return [
            'series' => $this->formatSeries(),
            'labels' => $this->labels(),
            'chart' => [
                'height' => 350,
                'type' => $this->type,
                'zoom' => [
                    'enabled' => false,
                ],
                'toolbar' => ['show' => false],
            ],
            'xaxis' => [
                'categories' => $this->labels(),
            ],
            'stroke' => [
                'curve' => 'smooth',
            ],
        ];
    }

    protected function formatSeries(): array
    {
        return collect($this->series)
            ->transform(fn ($data, $name) => ['name' => $name, 'data' => array_values($data)])
            ->values()
            ->toArray();
    }

    public function render()
    {
        return view('laravolt::ui-component.charts.chart');
    }
}
